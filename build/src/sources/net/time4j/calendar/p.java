package net.time4j.calendar;

import java.text.ParsePosition;
import java.util.Locale;
import kt.v;
import net.time4j.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum p {
    MINOR_01_LICHUN_315,
    MAJOR_01_YUSHUI_330,
    MINOR_02_JINGZHE_345,
    MAJOR_02_CHUNFEN_000,
    MINOR_03_QINGMING_015,
    MAJOR_03_GUYU_030,
    MINOR_04_LIXIA_045,
    MAJOR_04_XIAOMAN_060,
    MINOR_05_MANGZHONG_075,
    MAJOR_05_XIAZHI_090,
    MINOR_06_XIAOSHU_105,
    MAJOR_06_DASHU_120,
    MINOR_07_LIQIU_135,
    MAJOR_07_CHUSHU_150,
    MINOR_08_BAILU_165,
    MAJOR_08_QIUFEN_180,
    MINOR_09_HANLU_195,
    MAJOR_09_SHUANGJIANG_210,
    MINOR_10_LIDONG_225,
    MAJOR_10_XIAOXUE_240,
    MINOR_11_DAXUE_255,
    MAJOR_11_DONGZHI_270,
    MINOR_12_XIAOHAN_285,
    MAJOR_12_DAHAN_300;
    
    private static final p[] J = values();
    private static final String[] K = {"lichun", "yushui", "jingzhe", "chunfen", "qingming", "guyu", "lixia", "xiaoman", "mangzhong", "xiazhi", "xiaoshu", "dashu", "liqiu", "chushu", "bailu", "qiufen", "hanlu", "shuangjiang", "lidong", "xiaoxue", "daxue", "dongzhi", "xiaohan", "dahan"};
    private static final String[] L = {"lìchūn", "yǔshuǐ", "jīngzhé", "chūnfēn", "qīngmíng", "gǔyǔ", "lìxià", "xiǎomǎn", "mángzhòng", "xiàzhì", "xiǎoshǔ", "dàshǔ", "lìqiū", "chǔshǔ", "báilù", "qiūfēn", "hánlù", "shuāngjiàng", "lìdōng", "xiǎoxuě", "dàxuě", "dōngzhì", "xiǎohán", "dàhán"};
    private static final String[] M = {"立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至", "小寒", "大寒"};
    private static final String[] N = {"立春", "雨水", "驚蟄", "春分", "清明", "穀雨", "立夏", "小滿", "芒種", "夏至", "小暑", "大暑", "立秋", "處暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至", "小寒", "大寒"};
    private static final String[] O = {"입춘", "우수", "경칩", "춘분", "청명", "곡우", "입하", "소만", "망종", "하지", "소서", "대서", "입추", "처서", "백로", "추분", "한로", "상강", "입동", "소설", "대설", "동지", "소한", "대한"};
    private static final String[] P = {"Lập xuân", "Vũ thủy", "Kinh trập", "Xuân phân", "Thanh minh", "Cốc vũ", "Lập hạ", "Tiểu mãn", "Mang chủng", "Hạ chí", "Tiểu thử", "Đại thử", "Lập thu", "Xử thử", "Bạch lộ", "Thu phân", "Hàn lộ", "Sương giáng", "Lập đông", "Tiểu tuyết", "Đại tuyết", "Đông chí", "Tiểu hàn", "Đại hàn"};
    private static final String[] Q = {"立春", "雨水", "啓蟄", "春分", "清明", "穀雨", "立夏", "小満", "芒種", "夏至", "小暑", "大暑", "立秋", "処暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至", "小寒", "大寒"};

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements v {
        a() {
        }

        @Override // kt.v
        /* renamed from: a */
        public f apply(f fVar) {
            return p.this.l(fVar.U().b(p.i(fVar)));
        }
    }

    private a0 d(a0 a0Var) {
        double f10 = f();
        double c10 = jt.c.g(a0Var).c();
        double h10 = ((h(f10 - p(c10)) * 365.242189d) / 360.0d) + c10;
        double max = Math.max(c10, h10 - 5.0d);
        double d10 = h10 + 5.0d;
        while (true) {
            double d11 = (max + d10) / 2.0d;
            if (d10 - max < 1.0E-5d) {
                return jt.c.f(d11).h();
            }
            if (h(p(d11) - f10) < 180.0d) {
                d10 = d11;
            } else {
                max = d11;
            }
        }
    }

    private static String[] g(Locale locale) {
        if (locale.getLanguage().equals("zh")) {
            if (locale.getCountry().equals("TW")) {
                return N;
            }
            return M;
        } else if (locale.getLanguage().equals("ko")) {
            return O;
        } else {
            if (locale.getLanguage().equals("vi")) {
                return P;
            }
            if (locale.getLanguage().equals("ja")) {
                return Q;
            }
            if (locale.getLanguage().isEmpty()) {
                return K;
            }
            return L;
        }
    }

    private static double h(double d10) {
        return d10 - (Math.floor(d10 / 360.0d) * 360.0d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static long i(f fVar) {
        return fVar.U().q(fVar.V(), fVar.f0().getNumber());
    }

    public static p k(a0 a0Var) {
        return J[(((int) Math.floor(p(jt.c.g(a0Var).c()) / 15.0d)) + 3) % 24];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static p m(CharSequence charSequence, Locale locale, ParsePosition parsePosition) {
        String[] g10 = g(locale);
        boolean isEmpty = locale.getLanguage().isEmpty();
        int index = parsePosition.getIndex();
        for (int i10 = 0; i10 < g10.length; i10++) {
            String str = g10[i10];
            String charSequence2 = charSequence.subSequence(index, Math.min(charSequence.length(), str.length() + index)).toString();
            if ((isEmpty && charSequence2.equalsIgnoreCase(str)) || charSequence2.equals(str)) {
                parsePosition.setIndex(parsePosition.getIndex() + str.length());
                return J[i10];
            }
        }
        if (!locale.getLanguage().isEmpty() && g10 == L) {
            return m(charSequence, Locale.ROOT, parsePosition);
        }
        parsePosition.setErrorIndex(parsePosition.getIndex());
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static double p(double d10) {
        return jt.e.f32311o.h(d10, "solar-longitude");
    }

    public String e(Locale locale) {
        return g(locale)[ordinal()];
    }

    public int f() {
        return ((ordinal() + 21) % 24) * 15;
    }

    public f l(f fVar) {
        d U = fVar.U();
        long i10 = fVar.i();
        return U.b(d(U.n(i10)).t0(U.i(i10)).f0().i());
    }

    public v o() {
        return new a();
    }
}
