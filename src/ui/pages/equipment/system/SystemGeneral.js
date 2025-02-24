import React, {Component} from 'react';
import EISPanel from 'eam-components/dist/ui/components/panel';
import EAMSelect from 'eam-components/dist/ui/components/muiinputs/EAMSelect'
import EAMInput from 'eam-components/dist/ui/components/muiinputs/EAMInput'
import EAMAutocomplete from 'eam-components/dist/ui/components/muiinputs/EAMAutocomplete'
import WSEquipment from "../../../../tools/WSEquipment";

class SystemGeneral extends Component {

    render() {
        let {equipment, children, systemLayout, updateEquipmentProperty, layout} = this.props;

        return (
            <EISPanel heading="GENERAL">
                <div style={{width: "100%", marginTop: 0}}>

                    {layout.newEntity &&
                    <EAMInput
                        children={children}
                        elementInfo={systemLayout.fields['equipmentno']}
                        value={equipment.code}
                        updateProperty={updateEquipmentProperty}
                        valueKey="code"/>}

                    <EAMInput
                        children={children}
                        elementInfo={systemLayout.fields['alias']}
                        value={equipment.alias}
                        updateProperty={updateEquipmentProperty}
                        valueKey="alias"/>

                    <EAMInput
                        children = {children}
                        elementInfo={systemLayout.fields['udfchar45']}
                        value={equipment.userDefinedFields.udfchar45}
                        updateProperty={updateEquipmentProperty}
                        valueKey="userDefinedFields.udfchar45"
                    />

                    <EAMInput
                        children={children}
                        elementInfo={systemLayout.fields['equipmentdesc']}
                        value={equipment.description}
                        updateProperty={updateEquipmentProperty}
                        valueKey="description"/>

                    <EAMAutocomplete
                        children={children}
                        elementInfo={systemLayout.fields['department']}
                        value={equipment.departmentCode}
                        valueDesc={equipment.departmentDesc}
                        updateProperty={updateEquipmentProperty}
                        valueKey="departmentCode"
                        descKey="departmentDesc"
                        autocompleteHandler={WSEquipment.autocompleteEquipmentDepartment}/>

                    <EAMSelect
                        children={children}
                        elementInfo={systemLayout.fields['assetstatus']}
                        value={equipment.statusCode}
                        values={layout.statusValues}
                        updateProperty={updateEquipmentProperty}
                        valueKey="statusCode"/>

                </div>
            </EISPanel>
        )
    }
}

export default SystemGeneral;