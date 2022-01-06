<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
    <table id="students" border="1" class="indent">
        <thead>
            <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Student Age</th>
            </tr>
        </thead>
        <tbody>
            <xsl:for-each select="//student">
                <tr>
                    <td>
                        <xsl:value-of select="name" />

                    </td>

                    <td>

                        <xsl:value-of select="id" />

                    </td>

                    <td>
                        <xsl:value-of select="age" />

                    </td>

                </tr>
 </xsl:for-each>

            
        </tbody>
    </table>
</xsl:template>
</xsl:stylesheet>