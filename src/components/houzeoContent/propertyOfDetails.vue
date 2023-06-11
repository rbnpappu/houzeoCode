<template>
    <div class="propertyContainer">
        <table class="tableData">
            <tr>
                <td class="row1">Type</td>
                <td>Single Family</td>
            </tr>
            <tr>
                <td class="row1">Status</td>
                <td>Active</td>
            </tr>
            <tr>
                <td class="row1">Days on Market</td>
                <td>5</td>
            </tr>
            <tr>
                <td class="row1">Open House</td>
                <td>Not Schedule</td>
            </tr>
            <tr>
                <td class="row1">Country</td>
                <td>Lincoln</td>
            </tr>
            <tr>
                <td class="row1">MLS Name</td>
                <td>Montana Reginoal MLS</td>
            </tr>
            <tr>
                <td class="row1">MLS Number</td>
                <td>22208962</td>
            </tr>
            
        </table>
        <table class="tableData">
            <tr>
                <td class="row1">Year Build</td>
                <td>2002</td>
            </tr>
            <tr>
                <td class="row1">Finished Area</td>
                <td>1,837 sq.ft.</td>
            </tr>
            <tr>
                <td class="row1">Lot Size</td>
                <td>0.18 acres</td>
            </tr>
            <tr>
                <td class="row1">Basement</td>
                <td>600 sq.ft.</td>
            </tr>
            <tr>
                <td class="row1">HOA Fees</td>
                <td>$110</td>
            </tr>
            <tr>
                <td class="row1">Buyer Agent Commision</td>
                <td>2%</td>
            </tr>
            
        </table>

    </div>

</template>

<script>
export default{
    name: 'propertyDetails'
}
</script>

<style>
.row1{
    display: flex;
    width: 123px;
    height: 33px;
    padding-top: 22px;
    justify-content: space-evenly;
    padding-right: 28px;
}
.propertyContainer{
    width: 663px;
    height: 792px;
    margin-left: 237px;
    margin-top: 12px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
}
.tableData{
    padding-top: 18px;
    margin-left: 45px;
}
</style>