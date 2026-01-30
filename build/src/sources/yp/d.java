package yp;

import ir.v;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import xp.b4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f54935a;

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f54936b;

    /* renamed from: c  reason: collision with root package name */
    private static final b f54937c;

    /* renamed from: d  reason: collision with root package name */
    private static final Map f54938d;

    /* renamed from: e  reason: collision with root package name */
    private static final b4 f54939e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Comparator {
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return lr.a.d(((b4) obj).getText(), ((b4) obj2).getText());
        }
    }

    static {
        d dVar = new d();
        f54935a = dVar;
        f54936b = ir.l.b(new Function0() { // from class: yp.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                List b10;
                b10 = d.b();
                return b10;
            }
        });
        b bVar = new b("+1", "US", "(###) ###-####", null, 8, null);
        f54937c = bVar;
        f54938d = o0.m(v.a("US", bVar), v.a("CA", new b("+1", "CA", "(###) ###-####", null, 8, null)), v.a("AG", new b("+1", "AG", "(###) ###-####", null, 8, null)), v.a("AS", new b("+1", "AS", "(###) ###-####", null, 8, null)), v.a("AI", new b("+1", "AI", "(###) ###-####", null, 8, null)), v.a("BB", new b("+1", "BB", "(###) ###-####", null, 8, null)), v.a("BM", new b("+1", "BM", "(###) ###-####", null, 8, null)), v.a("BS", new b("+1", "BS", "(###) ###-####", null, 8, null)), v.a("DM", new b("+1", "DM", "(###) ###-####", null, 8, null)), v.a("DO", new b("+1", "DO", "(###) ###-####", null, 8, null)), v.a("GD", new b("+1", "GD", "(###) ###-####", null, 8, null)), v.a("GU", new b("+1", "GU", "(###) ###-####", null, 8, null)), v.a("JM", new b("+1", "JM", "(###) ###-####", null, 8, null)), v.a("KN", new b("+1", "KN", "(###) ###-####", null, 8, null)), v.a("KY", new b("+1", "KY", "(###) ###-####", null, 8, null)), v.a("LC", new b("+1", "LC", "(###) ###-####", null, 8, null)), v.a("MP", new b("+1", "MP", "(###) ###-####", null, 8, null)), v.a("MS", new b("+1", "MS", "(###) ###-####", null, 8, null)), v.a("PR", new b("+1", "PR", "(###) ###-####", null, 8, null)), v.a("SX", new b("+1", "SX", "(###) ###-####", null, 8, null)), v.a("TC", new b("+1", "TC", "(###) ###-####", null, 8, null)), v.a("TT", new b("+1", "TT", "(###) ###-####", null, 8, null)), v.a("VC", new b("+1", "VC", "(###) ###-####", null, 8, null)), v.a("VG", new b("+1", "VG", "(###) ###-####", null, 8, null)), v.a("VI", new b("+1", "VI", "(###) ###-####", null, 8, null)), v.a("EG", new b("+20", "EG", "### ### ####", null, 8, null)), v.a("SS", new b("+211", "SS", "### ### ###", null, 8, null)), v.a("MA", new b("+212", "MA", "###-######", null, 8, null)), v.a("EH", new b("+212", "EH", "###-######", null, 8, null)), v.a("DZ", new b("+213", "DZ", "### ## ## ##", null, 8, null)), v.a("TN", new b("+216", "TN", "## ### ###", null, 8, null)), v.a("LY", new b("+218", "LY", "##-#######", null, 8, null)), v.a("GM", new b("+220", "GM", "### ####", null, 8, null)), v.a("SN", new b("+221", "SN", "## ### ## ##", null, 8, null)), v.a("MR", new b("+222", "MR", "## ## ## ##", null, 8, null)), v.a("ML", new b("+223", "ML", "## ## ## ##", null, 8, null)), v.a("GN", new b("+224", "GN", "### ## ## ##", null, 8, null)), v.a("CI", new b("+225", "CI", "## ## ## ##", null, 8, null)), v.a("BF", new b("+226", "BF", "## ## ## ##", null, 8, null)), v.a("NE", new b("+227", "NE", "## ## ## ##", null, 8, null)), v.a("TG", new b("+228", "TG", "## ## ## ##", null, 8, null)), v.a("BJ", new b("+229", "BJ", "## ## ## ##", null, 8, null)), v.a("MU", new b("+230", "MU", "#### ####", null, 8, null)), v.a("LR", new b("+231", "LR", "### ### ###", null, 8, null)), v.a("SL", new b("+232", "SL", "## ######", null, 8, null)), v.a("GH", new b("+233", "GH", "## ### ####", null, 8, null)), v.a("NG", new b("+234", "NG", "### ### ####", null, 8, null)), v.a("TD", new b("+235", "TD", "## ## ## ##", null, 8, null)), v.a("CF", new b("+236", "CF", "## ## ## ##", null, 8, null)), v.a("CM", new b("+237", "CM", "## ## ## ##", null, 8, null)), v.a("CV", new b("+238", "CV", "### ## ##", null, 8, null)), v.a("ST", new b("+239", "ST", "### ####", null, 8, null)), v.a("GQ", new b("+240", "GQ", "### ### ###", null, 8, null)), v.a("GA", new b("+241", "GA", "## ## ## ##", null, 8, null)), v.a("CG", new b("+242", "CG", "## ### ####", null, 8, null)), v.a("CD", new b("+243", "CD", "### ### ###", null, 8, null)), v.a("AO", new b("+244", "AO", "### ### ###", null, 8, null)), v.a("GW", new b("+245", "GW", "### ####", null, 8, null)), v.a("IO", new b("+246", "IO", "### ####", null, 8, null)), v.a("AC", new b("+247", "AC", null, null, 12, null)), v.a("SC", new b("+248", "SC", "# ### ###", null, 8, null)), v.a("RW", new b("+250", "RW", "### ### ###", null, 8, null)), v.a("ET", new b("+251", "ET", "## ### ####", null, 8, null)), v.a("SO", new b("+252", "SO", "## #######", null, 8, null)), v.a("DJ", new b("+253", "DJ", "## ## ## ##", null, 8, null)), v.a("KE", new b("+254", "KE", "## #######", null, 8, null)), v.a("TZ", new b("+255", "TZ", "### ### ###", null, 8, null)), v.a("UG", new b("+256", "UG", "### ######", null, 8, null)), v.a("BI", new b("+257", "BI", "## ## ## ##", null, 8, null)), v.a("MZ", new b("+258", "MZ", "## ### ####", null, 8, null)), v.a("ZM", new b("+260", "ZM", "## #######", null, 8, null)), v.a("MG", new b("+261", "MG", "## ## ### ##", null, 8, null)), v.a("RE", new b("+262", "RE", null, null, 12, null)), v.a("TF", new b("+262", "TF", null, null, 12, null)), v.a("YT", new b("+262", "YT", "### ## ## ##", null, 8, null)), v.a("ZW", new b("+263", "ZW", "## ### ####", null, 8, null)), v.a("NA", new b("+264", "NA", "## ### ####", null, 8, null)), v.a("MW", new b("+265", "MW", "### ## ## ##", null, 8, null)), v.a("LS", new b("+266", "LS", "#### ####", null, 8, null)), v.a("BW", new b("+267", "BW", "## ### ###", null, 8, null)), v.a("SZ", new b("+268", "SZ", "#### ####", null, 8, null)), v.a("KM", new b("+269", "KM", "### ## ##", null, 8, null)), v.a("ZA", new b("+27", "ZA", "## ### ####", null, 8, null)), v.a("SH", new b("+290", "SH", null, null, 12, null)), v.a("TA", new b("+290", "TA", null, null, 12, null)), v.a("ER", new b("+291", "ER", "# ### ###", null, 8, null)), v.a("AW", new b("+297", "AW", "### ####", null, 8, null)), v.a("FO", new b("+298", "FO", "######", null, 8, null)), v.a("GL", new b("+299", "GL", "## ## ##", null, 8, null)), v.a("GR", new b("+30", "GR", "### ### ####", null, 8, null)), v.a("NL", new b("+31", "NL", "# ########", null, 8, null)), v.a("BE", new b("+32", "BE", "### ## ## ##", null, 8, null)), v.a("FR", new b("+33", "FR", "# ## ## ## ##", null, 8, null)), v.a("ES", new b("+34", "ES", "### ## ## ##", null, 8, null)), v.a("GI", new b("+350", "GI", "### #####", null, 8, null)), v.a("PT", new b("+351", "PT", "### ### ###", null, 8, null)), v.a("LU", new b("+352", "LU", "## ## ## ###", null, 8, null)), v.a("IE", new b("+353", "IE", "## ### ####", null, 8, null)), v.a("IS", new b("+354", "IS", "### ####", null, 8, null)), v.a("AL", new b("+355", "AL", "## ### ####", null, 8, null)), v.a("MT", new b("+356", "MT", "#### ####", null, 8, null)), v.a("CY", new b("+357", "CY", "## ######", null, 8, null)), v.a("FI", new b("+358", "FI", "## ### ## ##", null, 8, null)), v.a("AX", new b("+358", "AX", null, null, 12, null)), v.a("BG", new b("+359", "BG", "### ### ##", null, 8, null)), v.a("HU", new b("+36", "HU", "## ### ####", null, 8, null)), v.a("LT", new b("+370", "LT", "### #####", null, 8, null)), v.a("LV", new b("+371", "LV", "## ### ###", null, 8, null)), v.a("EE", new b("+372", "EE", "#### ####", null, 8, null)), v.a("MD", new b("+373", "MD", "### ## ###", null, 8, null)), v.a("AM", new b("+374", "AM", "## ######", null, 8, null)), v.a("BY", new b("+375", "BY", "## ###-##-##", null, 8, null)), v.a("AD", new b("+376", "AD", "### ###", null, 8, null)), v.a("MC", new b("+377", "MC", "# ## ## ## ##", null, 8, null)), v.a("SM", new b("+378", "SM", "## ## ## ##", null, 8, null)), v.a("VA", new b("+379", "VA", null, null, 12, null)), v.a("UA", new b("+380", "UA", "## ### ####", null, 8, null)), v.a("RS", new b("+381", "RS", "## #######", null, 8, null)), v.a("ME", new b("+382", "ME", "## ### ###", null, 8, null)), v.a("XK", new b("+383", "XK", "## ### ###", null, 8, null)), v.a("HR", new b("+385", "HR", "## ### ####", null, 8, null)), v.a("SI", new b("+386", "SI", "## ### ###", null, 8, null)), v.a("BA", new b("+387", "BA", "## ###-###", null, 8, null)), v.a("MK", new b("+389", "MK", "## ### ###", null, 8, null)), v.a("IT", new b("+39", "IT", "## #### ####", null, 8, null)), v.a("RO", new b("+40", "RO", "## ### ####", null, 8, null)), v.a("CH", new b("+41", "CH", "## ### ## ##", null, 8, null)), v.a("CZ", new b("+420", "CZ", "### ### ###", null, 8, null)), v.a("SK", new b("+421", "SK", "### ### ###", null, 8, null)), v.a("LI", new b("+423", "LI", "### ### ###", null, 8, null)), v.a("AT", new b("+43", "AT", "### ######", null, 8, null)), v.a("GB", new b("+44", "GB", "#### ######", null, 8, null)), v.a("GG", new b("+44", "GG", "#### ######", null, 8, null)), v.a("JE", new b("+44", "JE", "#### ######", null, 8, null)), v.a("IM", new b("+44", "IM", "#### ######", null, 8, null)), v.a("DK", new b("+45", "DK", "## ## ## ##", null, 8, null)), v.a("SE", new b("+46", "SE", "##-### ## ##", null, 8, null)), v.a("NO", new b("+47", "NO", "### ## ###", null, 8, null)), v.a("BV", new b("+47", "BV", null, null, 12, null)), v.a("SJ", new b("+47", "SJ", "## ## ## ##", null, 8, null)), v.a("PL", new b("+48", "PL", "## ### ## ##", null, 8, null)), v.a("DE", new b("+49", "DE", "### #######", null, 8, null)), v.a("FK", new b("+500", "FK", null, null, 12, null)), v.a("GS", new b("+500", "GS", null, null, 12, null)), v.a("BZ", new b("+501", "BZ", "###-####", null, 8, null)), v.a("GT", new b("+502", "GT", "#### ####", null, 8, null)), v.a("SV", new b("+503", "SV", "#### ####", null, 8, null)), v.a("HN", new b("+504", "HN", "####-####", null, 8, null)), v.a("NI", new b("+505", "NI", "#### ####", null, 8, null)), v.a("CR", new b("+506", "CR", "#### ####", null, 8, null)), v.a("PA", new b("+507", "PA", "####-####", null, 8, null)), v.a("PM", new b("+508", "PM", "## ## ##", null, 8, null)), v.a("HT", new b("+509", "HT", "## ## ####", null, 8, null)), v.a("PE", new b("+51", "PE", "### ### ###", null, 8, null)), v.a("MX", new b("+52", "MX", "### ### ####", null, 8, null)), v.a("AR", new b("+54", "AR", "## ##-####-####", null, 8, null)), v.a("BR", new b("+55", "BR", "## #####-####", null, 8, null)), v.a("CL", new b("+56", "CL", "# #### ####", null, 8, null)), v.a("CO", new b("+57", "CO", "### #######", null, 8, null)), v.a("VE", new b("+58", "VE", "###-#######", null, 8, null)), v.a("BL", new b("+590", "BL", "### ## ## ##", null, 8, null)), v.a("MF", new b("+590", "MF", null, null, 12, null)), v.a("GP", new b("+590", "GP", "### ## ## ##", null, 8, null)), v.a("BO", new b("+591", "BO", "########", null, 8, null)), v.a("GY", new b("+592", "GY", "### ####", null, 8, null)), v.a("EC", new b("+593", "EC", "## ### ####", null, 8, null)), v.a("GF", new b("+594", "GF", "### ## ## ##", null, 8, null)), v.a("PY", new b("+595", "PY", "## #######", null, 8, null)), v.a("MQ", new b("+596", "MQ", "### ## ## ##", null, 8, null)), v.a("SR", new b("+597", "SR", "###-####", null, 8, null)), v.a("UY", new b("+598", "UY", "#### ####", null, 8, null)), v.a("CW", new b("+599", "CW", "# ### ####", null, 8, null)), v.a("BQ", new b("+599", "BQ", "### ####", null, 8, null)), v.a("MY", new b("+60", "MY", "##-### ####", null, 8, null)), v.a("AU", new b("+61", "AU", "### ### ###", null, 8, null)), v.a("ID", new b("+62", "ID", "###-###-###", null, 8, null)), v.a("PH", new b("+63", "PH", "#### ######", null, 8, null)), v.a("NZ", new b("+64", "NZ", "## ### ####", null, 8, null)), v.a("SG", new b("+65", "SG", "#### ####", null, 8, null)), v.a("TH", new b("+66", "TH", "## ### ####", null, 8, null)), v.a("TL", new b("+670", "TL", "#### ####", null, 8, null)), v.a("AQ", new b("+672", "AQ", "## ####", null, 8, null)), v.a("BN", new b("+673", "BN", "### ####", null, 8, null)), v.a("NR", new b("+674", "NR", "### ####", null, 8, null)), v.a("PG", new b("+675", "PG", "### ####", null, 8, null)), v.a("TO", new b("+676", "TO", "### ####", null, 8, null)), v.a("SB", new b("+677", "SB", "### ####", null, 8, null)), v.a("VU", new b("+678", "VU", "### ####", null, 8, null)), v.a("FJ", new b("+679", "FJ", "### ####", null, 8, null)), v.a("WF", new b("+681", "WF", "## ## ##", null, 8, null)), v.a("CK", new b("+682", "CK", "## ###", null, 8, null)), v.a("NU", new b("+683", "NU", null, null, 12, null)), v.a("WS", new b("+685", "WS", null, null, 12, null)), v.a("KI", new b("+686", "KI", null, null, 12, null)), v.a("NC", new b("+687", "NC", "########", null, 8, null)), v.a("TV", new b("+688", "TV", null, null, 12, null)), v.a("PF", new b("+689", "PF", "## ## ##", null, 8, null)), v.a("TK", new b("+690", "TK", null, null, 12, null)), v.a("RU", new b("+7", "RU", "### ###-##-##", null, 8, null)), v.a("KZ", new b("+7", "KZ", null, null, 12, null)), v.a("JP", new b("+81", "JP", "##-####-####", null, 8, null)), v.a("KR", new b("+82", "KR", "##-####-####", null, 8, null)), v.a("VN", new b("+84", "VN", "## ### ## ##", null, 8, null)), v.a("HK", new b("+852", "HK", "#### ####", null, 8, null)), v.a("MO", new b("+853", "MO", "#### ####", null, 8, null)), v.a("KH", new b("+855", "KH", "## ### ###", null, 8, null)), v.a("LA", new b("+856", "LA", "## ## ### ###", null, 8, null)), v.a("CN", new b("+86", "CN", "### #### ####", null, 8, null)), v.a("PN", new b("+872", "PN", null, null, 12, null)), v.a("BD", new b("+880", "BD", "####-######", null, 8, null)), v.a("TW", new b("+886", "TW", "### ### ###", null, 8, null)), v.a("TR", new b("+90", "TR", "### ### ####", null, 8, null)), v.a("IN", new b("+91", "IN", "## ## ######", null, 8, null)), v.a("PK", new b("+92", "PK", "### #######", null, 8, null)), v.a("AF", new b("+93", "AF", "## ### ####", null, 8, null)), v.a("LK", new b("+94", "LK", "## # ######", null, 8, null)), v.a("MM", new b("+95", "MM", "# ### ####", null, 8, null)), v.a("MV", new b("+960", "MV", "###-####", null, 8, null)), v.a("LB", new b("+961", "LB", "## ### ###", null, 8, null)), v.a("JO", new b("+962", "JO", "# #### ####", null, 8, null)), v.a("IQ", new b("+964", "IQ", "### ### ####", null, 8, null)), v.a("KW", new b("+965", "KW", "### #####", null, 8, null)), v.a("SA", new b("+966", "SA", "## ### ####", null, 8, null)), v.a("YE", new b("+967", "YE", "### ### ###", null, 8, null)), v.a("OM", new b("+968", "OM", "#### ####", null, 8, null)), v.a("PS", new b("+970", "PS", "### ### ###", null, 8, null)), v.a("AE", new b("+971", "AE", "## ### ####", null, 8, null)), v.a("IL", new b("+972", "IL", "##-###-####", null, 8, null)), v.a("BH", new b("+973", "BH", "#### ####", null, 8, null)), v.a("QA", new b("+974", "QA", "#### ####", null, 8, null)), v.a("BT", new b("+975", "BT", "## ## ## ##", null, 8, null)), v.a("MN", new b("+976", "MN", "#### ####", null, 8, null)), v.a("NP", new b("+977", "NP", "###-#######", null, 8, null)), v.a("TJ", new b("+992", "TJ", "### ## ####", null, 8, null)), v.a("TM", new b("+993", "TM", "## ##-##-##", null, 8, null)), v.a("AZ", new b("+994", "AZ", "## ### ## ##", null, 8, null)), v.a("GE", new b("+995", "GE", "### ## ## ##", null, 8, null)), v.a("KG", new b("+996", "KG", "### ### ###", null, 8, null)), v.a("UZ", new b("+998", "UZ", "## ### ## ##", null, 8, null)));
        f54939e = dVar.m(bVar);
    }

    private d() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List b() {
        return f54935a.d();
    }

    private final List c(String str) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : f54938d.values()) {
            if (Intrinsics.areEqual(((b) obj).e(), str)) {
                arrayList.add(obj);
            }
        }
        return arrayList;
    }

    private final List d() {
        b4 m10 = m(f54937c);
        Map map = f54938d;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (Map.Entry entry : map.entrySet()) {
            if (!Intrinsics.areEqual((String) entry.getKey(), m10.a())) {
                linkedHashMap.put(entry.getKey(), entry.getValue());
            }
        }
        ArrayList arrayList = new ArrayList(linkedHashMap.size());
        for (Map.Entry entry2 : linkedHashMap.entrySet()) {
            arrayList.add(f54935a.m((b) entry2.getValue()));
        }
        return CollectionsKt.L0(CollectionsKt.e(m10), CollectionsKt.W0(arrayList, new a()));
    }

    private final List l(b4 b4Var) {
        return StringsKt.split$default(StringsKt.k1(b4Var.a()).toString(), new String[]{" "}, false, 0, 6, null);
    }

    private final b4 m(b bVar) {
        String d10 = bVar.d();
        String upperCase = bVar.a().toUpperCase(Locale.ROOT);
        Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
        String e10 = bVar.e();
        return new b4(d10, upperCase + " " + e10);
    }

    public final String e(b4 b4Var) {
        Intrinsics.checkNotNullParameter(b4Var, "<this>");
        String upperCase = StringsKt.k1((String) CollectionsKt.o0(l(b4Var))).toString().toUpperCase(Locale.ROOT);
        Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
        return upperCase;
    }

    public final List f() {
        return (List) f54936b.getValue();
    }

    public final b4 g(String str) {
        b4 m10;
        if (str != null && str.length() == 2) {
            String upperCase = str.toUpperCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
            b bVar = (b) f54938d.get(upperCase);
            if (bVar != null && (m10 = m(bVar)) != null) {
                return m10;
            }
            return f54939e;
        }
        return f54939e;
    }

    public final String h(b4 b4Var) {
        Intrinsics.checkNotNullParameter(b4Var, "<this>");
        return StringsKt.k1((String) CollectionsKt.z0(l(b4Var))).toString();
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x003a, code lost:
        if (r0 == null) goto L13;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.String i(xp.b4 r8) {
        /*
            r7 = this;
            java.lang.String r0 = "option"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
            java.lang.String r1 = r8.getText()
            java.lang.String r8 = " "
            java.lang.String[] r2 = new java.lang.String[]{r8}
            r5 = 6
            r6 = 0
            r3 = 0
            r4 = 0
            java.util.List r0 = kotlin.text.StringsKt.split$default(r1, r2, r3, r4, r5, r6)
            r1 = 0
            java.lang.Object r2 = kotlin.collections.CollectionsKt.q0(r0, r1)
            java.lang.String r2 = (java.lang.String) r2
            if (r2 != 0) goto L26
            xp.b4 r2 = yp.d.f54939e
            java.lang.String r2 = r2.getText()
        L26:
            java.lang.Object r0 = kotlin.collections.CollectionsKt.B0(r0)
            java.lang.String r0 = (java.lang.String) r0
            if (r0 == 0) goto L3c
            java.lang.String r3 = "+"
            r4 = 2
            r5 = 0
            boolean r1 = kotlin.text.StringsKt.P(r0, r3, r1, r4, r5)
            if (r1 == 0) goto L39
            goto L3a
        L39:
            r0 = r5
        L3a:
            if (r0 != 0) goto L3e
        L3c:
            java.lang.String r0 = ""
        L3e:
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            r1.append(r2)
            r1.append(r8)
            r1.append(r0)
            java.lang.String r8 = r1.toString()
            java.lang.CharSequence r8 = kotlin.text.StringsKt.k1(r8)
            java.lang.String r8 = r8.toString()
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: yp.d.i(xp.b4):java.lang.String");
    }

    public final b j() {
        return f54937c;
    }

    public final j k(String inputNumber) {
        Object obj;
        Intrinsics.checkNotNullParameter(inputNumber, "inputNumber");
        String obj2 = StringsKt.k1(inputNumber).toString();
        String str = null;
        if (!StringsKt.P(obj2, "+", false, 2, null)) {
            obj2 = "+" + obj2;
        }
        String a10 = f54937c.a();
        int i10 = 4;
        while (true) {
            if (1 >= i10) {
                break;
            }
            if (obj2.length() >= i10) {
                String substring = obj2.substring(0, i10);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                List c10 = c(substring);
                if (!c10.isEmpty()) {
                    if (c10.size() == 1) {
                        a10 = ((b) c10.get(0)).a();
                    } else {
                        Iterator it = c10.iterator();
                        while (true) {
                            if (it.hasNext()) {
                                obj = it.next();
                                String a11 = ((b) obj).a();
                                String country = Locale.getDefault().getCountry();
                                Intrinsics.checkNotNullExpressionValue(country, "getCountry(...)");
                                if (a11.contentEquals(country)) {
                                    break;
                                }
                            } else {
                                obj = null;
                                break;
                            }
                        }
                        b bVar = (b) obj;
                        if (bVar == null || (a10 = bVar.a()) == null) {
                            a10 = ((b) CollectionsKt.o0(c10)).a();
                        }
                    }
                }
            }
            i10--;
        }
        b bVar2 = (b) f54938d.get(a10);
        if (bVar2 != null) {
            str = bVar2.e();
        }
        if (str != null && str.length() != 0) {
            return new j(a10, StringsKt.k1(StringsKt.p1(obj2, str.length())).toString());
        }
        return new j(a10, StringsKt.k1(StringsKt.p1(obj2, 1)).toString());
    }
}
