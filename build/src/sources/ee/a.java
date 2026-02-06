package ee;

import android.graphics.PointF;
import android.text.Layout;
import android.text.SpannableString;
import android.text.style.BackgroundColorSpan;
import android.text.style.ForegroundColorSpan;
import android.text.style.StrikethroughSpan;
import android.text.style.StyleSpan;
import android.text.style.UnderlineSpan;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import ee.c;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import ne.h0;
import ne.w0;
import ne.y;
import zd.b;
import zd.f;
import zd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends f {

    /* renamed from: t  reason: collision with root package name */
    private static final Pattern f21447t = Pattern.compile("(?:(\\d+):)?(\\d+):(\\d+)[:.](\\d+)");

    /* renamed from: o  reason: collision with root package name */
    private final boolean f21448o;

    /* renamed from: p  reason: collision with root package name */
    private final b f21449p;

    /* renamed from: q  reason: collision with root package name */
    private Map f21450q;

    /* renamed from: r  reason: collision with root package name */
    private float f21451r;

    /* renamed from: s  reason: collision with root package name */
    private float f21452s;

    public a(List list) {
        super("SsaDecoder");
        this.f21451r = -3.4028235E38f;
        this.f21452s = -3.4028235E38f;
        if (list != null && !list.isEmpty()) {
            this.f21448o = true;
            String E = w0.E((byte[]) list.get(0));
            ne.a.a(E.startsWith("Format:"));
            this.f21449p = (b) ne.a.e(b.a(E));
            H(new h0((byte[]) list.get(1)), mi.d.f37171c);
            return;
        }
        this.f21448o = false;
        this.f21449p = null;
    }

    private static int B(long j10, List list, List list2) {
        int i10;
        ArrayList arrayList;
        int size = list.size() - 1;
        while (true) {
            if (size >= 0) {
                if (((Long) list.get(size)).longValue() == j10) {
                    return size;
                }
                if (((Long) list.get(size)).longValue() < j10) {
                    i10 = size + 1;
                    break;
                }
                size--;
            } else {
                i10 = 0;
                break;
            }
        }
        list.add(i10, Long.valueOf(j10));
        if (i10 == 0) {
            arrayList = new ArrayList();
        } else {
            arrayList = new ArrayList((Collection) list2.get(i10 - 1));
        }
        list2.add(i10, arrayList);
        return i10;
    }

    private static float C(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    return -3.4028235E38f;
                }
                return 0.95f;
            }
            return 0.5f;
        }
        return 0.05f;
    }

    private static zd.b D(String str, c cVar, c.b bVar, float f10, float f11) {
        SpannableString spannableString = new SpannableString(str);
        b.C0770b o10 = new b.C0770b().o(spannableString);
        if (cVar != null) {
            if (cVar.f21460c != null) {
                spannableString.setSpan(new ForegroundColorSpan(cVar.f21460c.intValue()), 0, spannableString.length(), 33);
            }
            if (cVar.f21467j == 3 && cVar.f21461d != null) {
                spannableString.setSpan(new BackgroundColorSpan(cVar.f21461d.intValue()), 0, spannableString.length(), 33);
            }
            float f12 = cVar.f21462e;
            if (f12 != -3.4028235E38f && f11 != -3.4028235E38f) {
                o10.q(f12 / f11, 1);
            }
            boolean z10 = cVar.f21463f;
            if (z10 && cVar.f21464g) {
                spannableString.setSpan(new StyleSpan(3), 0, spannableString.length(), 33);
            } else if (z10) {
                spannableString.setSpan(new StyleSpan(1), 0, spannableString.length(), 33);
            } else if (cVar.f21464g) {
                spannableString.setSpan(new StyleSpan(2), 0, spannableString.length(), 33);
            }
            if (cVar.f21465h) {
                spannableString.setSpan(new UnderlineSpan(), 0, spannableString.length(), 33);
            }
            if (cVar.f21466i) {
                spannableString.setSpan(new StrikethroughSpan(), 0, spannableString.length(), 33);
            }
        }
        int i10 = bVar.f21483a;
        if (i10 == -1) {
            if (cVar != null) {
                i10 = cVar.f21459b;
            } else {
                i10 = -1;
            }
        }
        o10.p(N(i10)).l(M(i10)).i(L(i10));
        PointF pointF = bVar.f21484b;
        if (pointF != null && f11 != -3.4028235E38f && f10 != -3.4028235E38f) {
            o10.k(pointF.x / f10);
            o10.h(bVar.f21484b.y / f11, 0);
        } else {
            o10.k(C(o10.d()));
            o10.h(C(o10.c()), 0);
        }
        return o10.a();
    }

    private Charset E(h0 h0Var) {
        Charset P = h0Var.P();
        if (P != null) {
            return P;
        }
        return mi.d.f37171c;
    }

    private void F(String str, b bVar, List list, List list2) {
        c cVar;
        int i10;
        ne.a.a(str.startsWith("Dialogue:"));
        String[] split = str.substring(9).split(",", bVar.f21457e);
        if (split.length != bVar.f21457e) {
            y.i("SsaDecoder", "Skipping dialogue line with fewer columns than format: " + str);
            return;
        }
        long K = K(split[bVar.f21453a]);
        if (K == -9223372036854775807L) {
            y.i("SsaDecoder", "Skipping invalid timing: " + str);
            return;
        }
        long K2 = K(split[bVar.f21454b]);
        if (K2 == -9223372036854775807L) {
            y.i("SsaDecoder", "Skipping invalid timing: " + str);
            return;
        }
        Map map = this.f21450q;
        if (map != null && (i10 = bVar.f21455c) != -1) {
            cVar = (c) map.get(split[i10].trim());
        } else {
            cVar = null;
        }
        String str2 = split[bVar.f21456d];
        zd.b D = D(c.b.d(str2).replace("\\N", ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE).replace("\\n", ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE).replace("\\h", " "), cVar, c.b.b(str2), this.f21451r, this.f21452s);
        int B = B(K2, list2, list);
        for (int B2 = B(K, list2, list); B2 < B; B2++) {
            ((List) list.get(B2)).add(D);
        }
    }

    private void G(h0 h0Var, List list, List list2, Charset charset) {
        b bVar;
        if (this.f21448o) {
            bVar = this.f21449p;
        } else {
            bVar = null;
        }
        while (true) {
            String t10 = h0Var.t(charset);
            if (t10 != null) {
                if (t10.startsWith("Format:")) {
                    bVar = b.a(t10);
                } else if (t10.startsWith("Dialogue:")) {
                    if (bVar == null) {
                        y.i("SsaDecoder", "Skipping dialogue line before complete format: " + t10);
                    } else {
                        F(t10, bVar, list, list2);
                    }
                }
            } else {
                return;
            }
        }
    }

    private void H(h0 h0Var, Charset charset) {
        while (true) {
            String t10 = h0Var.t(charset);
            if (t10 != null) {
                if ("[Script Info]".equalsIgnoreCase(t10)) {
                    I(h0Var, charset);
                } else if ("[V4+ Styles]".equalsIgnoreCase(t10)) {
                    this.f21450q = J(h0Var, charset);
                } else if ("[V4 Styles]".equalsIgnoreCase(t10)) {
                    y.f("SsaDecoder", "[V4 Styles] are not supported");
                } else if ("[Events]".equalsIgnoreCase(t10)) {
                    return;
                }
            } else {
                return;
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:24:0x0059 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:4:0x0006  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void I(ne.h0 r5, java.nio.charset.Charset r6) {
        /*
            r4 = this;
        L0:
            java.lang.String r0 = r5.t(r6)
            if (r0 == 0) goto L59
            int r1 = r5.a()
            if (r1 == 0) goto L14
            char r1 = r5.h(r6)
            r2 = 91
            if (r1 == r2) goto L59
        L14:
            java.lang.String r1 = ":"
            java.lang.String[] r0 = r0.split(r1)
            int r1 = r0.length
            r2 = 2
            if (r1 == r2) goto L1f
            goto L0
        L1f:
            r1 = 0
            r1 = r0[r1]
            java.lang.String r1 = r1.trim()
            java.lang.String r1 = mi.b.e(r1)
            r1.getClass()
            java.lang.String r2 = "playresx"
            boolean r2 = r1.equals(r2)
            r3 = 1
            if (r2 != 0) goto L4c
            java.lang.String r2 = "playresy"
            boolean r1 = r1.equals(r2)
            if (r1 != 0) goto L3f
            goto L0
        L3f:
            r0 = r0[r3]     // Catch: java.lang.NumberFormatException -> L0
            java.lang.String r0 = r0.trim()     // Catch: java.lang.NumberFormatException -> L0
            float r0 = java.lang.Float.parseFloat(r0)     // Catch: java.lang.NumberFormatException -> L0
            r4.f21452s = r0     // Catch: java.lang.NumberFormatException -> L0
            goto L0
        L4c:
            r0 = r0[r3]     // Catch: java.lang.NumberFormatException -> L0
            java.lang.String r0 = r0.trim()     // Catch: java.lang.NumberFormatException -> L0
            float r0 = java.lang.Float.parseFloat(r0)     // Catch: java.lang.NumberFormatException -> L0
            r4.f21451r = r0     // Catch: java.lang.NumberFormatException -> L0
            goto L0
        L59:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ee.a.I(ne.h0, java.nio.charset.Charset):void");
    }

    private static Map J(h0 h0Var, Charset charset) {
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        c.a aVar = null;
        while (true) {
            String t10 = h0Var.t(charset);
            if (t10 == null || (h0Var.a() != 0 && h0Var.h(charset) == '[')) {
                break;
            } else if (t10.startsWith("Format:")) {
                aVar = c.a.a(t10);
            } else if (t10.startsWith("Style:")) {
                if (aVar == null) {
                    y.i("SsaDecoder", "Skipping 'Style:' line before 'Format:' line: " + t10);
                } else {
                    c b10 = c.b(t10, aVar);
                    if (b10 != null) {
                        linkedHashMap.put(b10.f21458a, b10);
                    }
                }
            }
        }
        return linkedHashMap;
    }

    private static long K(String str) {
        Matcher matcher = f21447t.matcher(str.trim());
        if (!matcher.matches()) {
            return -9223372036854775807L;
        }
        return (Long.parseLong((String) w0.j(matcher.group(1))) * 3600000000L) + (Long.parseLong((String) w0.j(matcher.group(2))) * 60000000) + (Long.parseLong((String) w0.j(matcher.group(3))) * 1000000) + (Long.parseLong((String) w0.j(matcher.group(4))) * 10000);
    }

    private static int L(int i10) {
        switch (i10) {
            case -1:
                return Integer.MIN_VALUE;
            case 0:
            default:
                y.i("SsaDecoder", "Unknown alignment: " + i10);
                return Integer.MIN_VALUE;
            case 1:
            case 2:
            case 3:
                return 2;
            case 4:
            case 5:
            case 6:
                return 1;
            case 7:
            case 8:
            case 9:
                return 0;
        }
    }

    private static int M(int i10) {
        switch (i10) {
            case -1:
                return Integer.MIN_VALUE;
            case 0:
            default:
                y.i("SsaDecoder", "Unknown alignment: " + i10);
                return Integer.MIN_VALUE;
            case 1:
            case 4:
            case 7:
                return 0;
            case 2:
            case 5:
            case 8:
                return 1;
            case 3:
            case 6:
            case 9:
                return 2;
        }
    }

    private static Layout.Alignment N(int i10) {
        switch (i10) {
            case -1:
                return null;
            case 0:
            default:
                y.i("SsaDecoder", "Unknown alignment: " + i10);
                return null;
            case 1:
            case 4:
            case 7:
                return Layout.Alignment.ALIGN_NORMAL;
            case 2:
            case 5:
            case 8:
                return Layout.Alignment.ALIGN_CENTER;
            case 3:
            case 6:
            case 9:
                return Layout.Alignment.ALIGN_OPPOSITE;
        }
    }

    @Override // zd.f
    protected g z(byte[] bArr, int i10, boolean z10) {
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        h0 h0Var = new h0(bArr, i10);
        Charset E = E(h0Var);
        if (!this.f21448o) {
            H(h0Var, E);
        }
        G(h0Var, arrayList, arrayList2, E);
        return new d(arrayList, arrayList2);
    }
}
