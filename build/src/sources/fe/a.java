package fe;

import android.text.Html;
import android.text.Spanned;
import android.text.TextUtils;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import ii.d;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import ne.h0;
import ne.y;
import ne.z;
import zd.f;
import zd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends f {

    /* renamed from: q  reason: collision with root package name */
    private static final Pattern f24254q = Pattern.compile("\\s*((?:(\\d+):)?(\\d+):(\\d+)(?:,(\\d+))?)\\s*-->\\s*((?:(\\d+):)?(\\d+):(\\d+)(?:,(\\d+))?)\\s*");

    /* renamed from: r  reason: collision with root package name */
    private static final Pattern f24255r = Pattern.compile("\\{\\\\.*?\\}");

    /* renamed from: o  reason: collision with root package name */
    private final StringBuilder f24256o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayList f24257p;

    public a() {
        super("SubripDecoder");
        this.f24256o = new StringBuilder();
        this.f24257p = new ArrayList();
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:10:0x0031, code lost:
        if (r15.equals("{\\an9}") != false) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x003d, code lost:
        if (r15.equals("{\\an7}") != false) goto L36;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0044, code lost:
        if (r15.equals("{\\an6}") != false) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0050, code lost:
        if (r15.equals("{\\an4}") != false) goto L36;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x0057, code lost:
        if (r15.equals("{\\an3}") != false) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x0059, code lost:
        r14.l(2);
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x0066, code lost:
        if (r15.equals("{\\an1}") != false) goto L36;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0068, code lost:
        r14.l(0);
     */
    /* JADX WARN: Code restructure failed: missing block: B:35:0x007b, code lost:
        if (r15.equals("{\\an9}") != false) goto L15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:38:0x0082, code lost:
        if (r15.equals("{\\an8}") != false) goto L15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:41:0x0089, code lost:
        if (r15.equals("{\\an7}") != false) goto L15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:42:0x008b, code lost:
        r14.i(0);
     */
    /* JADX WARN: Code restructure failed: missing block: B:47:0x00a2, code lost:
        if (r15.equals("{\\an3}") != false) goto L27;
     */
    /* JADX WARN: Code restructure failed: missing block: B:50:0x00a9, code lost:
        if (r15.equals("{\\an2}") != false) goto L27;
     */
    /* JADX WARN: Code restructure failed: missing block: B:53:0x00b0, code lost:
        if (r15.equals("{\\an1}") != false) goto L27;
     */
    /* JADX WARN: Code restructure failed: missing block: B:54:0x00b2, code lost:
        r14.i(2);
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private zd.b B(android.text.Spanned r14, java.lang.String r15) {
        /*
            r13 = this;
            zd.b$b r0 = new zd.b$b
            r0.<init>()
            zd.b$b r14 = r0.o(r14)
            if (r15 != 0) goto L10
            zd.b r14 = r14.a()
            return r14
        L10:
            int r0 = r15.hashCode()
            r1 = 2
            r2 = 1
            java.lang.String r3 = "{\\an1}"
            java.lang.String r4 = "{\\an2}"
            java.lang.String r5 = "{\\an3}"
            java.lang.String r6 = "{\\an4}"
            java.lang.String r7 = "{\\an5}"
            java.lang.String r8 = "{\\an6}"
            java.lang.String r9 = "{\\an7}"
            java.lang.String r10 = "{\\an8}"
            java.lang.String r11 = "{\\an9}"
            r12 = 0
            switch(r0) {
                case -685620710: goto L62;
                case -685620679: goto L5d;
                case -685620648: goto L53;
                case -685620617: goto L4c;
                case -685620586: goto L47;
                case -685620555: goto L40;
                case -685620524: goto L39;
                case -685620493: goto L34;
                case -685620462: goto L2d;
                default: goto L2c;
            }
        L2c:
            goto L6c
        L2d:
            boolean r0 = r15.equals(r11)
            if (r0 == 0) goto L6c
            goto L59
        L34:
            boolean r0 = r15.equals(r10)
            goto L6c
        L39:
            boolean r0 = r15.equals(r9)
            if (r0 == 0) goto L6c
            goto L68
        L40:
            boolean r0 = r15.equals(r8)
            if (r0 == 0) goto L6c
            goto L59
        L47:
            boolean r0 = r15.equals(r7)
            goto L6c
        L4c:
            boolean r0 = r15.equals(r6)
            if (r0 == 0) goto L6c
            goto L68
        L53:
            boolean r0 = r15.equals(r5)
            if (r0 == 0) goto L6c
        L59:
            r14.l(r1)
            goto L6f
        L5d:
            boolean r0 = r15.equals(r4)
            goto L6c
        L62:
            boolean r0 = r15.equals(r3)
            if (r0 == 0) goto L6c
        L68:
            r14.l(r12)
            goto L6f
        L6c:
            r14.l(r2)
        L6f:
            int r0 = r15.hashCode()
            switch(r0) {
                case -685620710: goto Lac;
                case -685620679: goto La5;
                case -685620648: goto L9e;
                case -685620617: goto L99;
                case -685620586: goto L94;
                case -685620555: goto L8f;
                case -685620524: goto L85;
                case -685620493: goto L7e;
                case -685620462: goto L77;
                default: goto L76;
            }
        L76:
            goto Lb6
        L77:
            boolean r15 = r15.equals(r11)
            if (r15 == 0) goto Lb6
            goto L8b
        L7e:
            boolean r15 = r15.equals(r10)
            if (r15 == 0) goto Lb6
            goto L8b
        L85:
            boolean r15 = r15.equals(r9)
            if (r15 == 0) goto Lb6
        L8b:
            r14.i(r12)
            goto Lb9
        L8f:
            boolean r15 = r15.equals(r8)
            goto Lb6
        L94:
            boolean r15 = r15.equals(r7)
            goto Lb6
        L99:
            boolean r15 = r15.equals(r6)
            goto Lb6
        L9e:
            boolean r15 = r15.equals(r5)
            if (r15 == 0) goto Lb6
            goto Lb2
        La5:
            boolean r15 = r15.equals(r4)
            if (r15 == 0) goto Lb6
            goto Lb2
        Lac:
            boolean r15 = r15.equals(r3)
            if (r15 == 0) goto Lb6
        Lb2:
            r14.i(r1)
            goto Lb9
        Lb6:
            r14.i(r2)
        Lb9:
            int r15 = r14.d()
            float r15 = D(r15)
            zd.b$b r15 = r14.k(r15)
            int r14 = r14.c()
            float r14 = D(r14)
            zd.b$b r14 = r15.h(r14, r12)
            zd.b r14 = r14.a()
            return r14
        */
        throw new UnsupportedOperationException("Method not decompiled: fe.a.B(android.text.Spanned, java.lang.String):zd.b");
    }

    private Charset C(h0 h0Var) {
        Charset P = h0Var.P();
        if (P != null) {
            return P;
        }
        return d.f28184c;
    }

    static float D(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return 0.92f;
                }
                throw new IllegalArgumentException();
            }
            return 0.5f;
        }
        return 0.08f;
    }

    private static long E(Matcher matcher, int i10) {
        long j10;
        String group = matcher.group(i10 + 1);
        if (group != null) {
            j10 = Long.parseLong(group) * LogThrottleSingleton.RATE_LIMIT_ONE_HOUR;
        } else {
            j10 = 0;
        }
        long parseLong = j10 + (Long.parseLong((String) ne.a.e(matcher.group(i10 + 2))) * LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE) + (Long.parseLong((String) ne.a.e(matcher.group(i10 + 3))) * 1000);
        String group2 = matcher.group(i10 + 4);
        if (group2 != null) {
            parseLong += Long.parseLong(group2);
        }
        return parseLong * 1000;
    }

    private String F(String str, ArrayList arrayList) {
        String trim = str.trim();
        StringBuilder sb2 = new StringBuilder(trim);
        Matcher matcher = f24255r.matcher(trim);
        int i10 = 0;
        while (matcher.find()) {
            String group = matcher.group();
            arrayList.add(group);
            int start = matcher.start() - i10;
            int length = group.length();
            sb2.replace(start, start + length, "");
            i10 += length;
        }
        return sb2.toString();
    }

    @Override // zd.f
    protected g z(byte[] bArr, int i10, boolean z10) {
        String str;
        ArrayList arrayList = new ArrayList();
        z zVar = new z();
        h0 h0Var = new h0(bArr, i10);
        Charset C = C(h0Var);
        while (true) {
            String t10 = h0Var.t(C);
            int i11 = 0;
            if (t10 == null) {
                break;
            } else if (t10.length() != 0) {
                try {
                    Integer.parseInt(t10);
                    String t11 = h0Var.t(C);
                    if (t11 == null) {
                        y.i("SubripDecoder", "Unexpected end");
                        break;
                    }
                    Matcher matcher = f24254q.matcher(t11);
                    if (matcher.matches()) {
                        zVar.a(E(matcher, 1));
                        zVar.a(E(matcher, 6));
                        this.f24256o.setLength(0);
                        this.f24257p.clear();
                        for (String t12 = h0Var.t(C); !TextUtils.isEmpty(t12); t12 = h0Var.t(C)) {
                            if (this.f24256o.length() > 0) {
                                this.f24256o.append("<br>");
                            }
                            this.f24256o.append(F(t12, this.f24257p));
                        }
                        Spanned fromHtml = Html.fromHtml(this.f24256o.toString());
                        while (true) {
                            if (i11 < this.f24257p.size()) {
                                str = (String) this.f24257p.get(i11);
                                if (str.matches("\\{\\\\an[1-9]\\}")) {
                                    break;
                                }
                                i11++;
                            } else {
                                str = null;
                                break;
                            }
                        }
                        arrayList.add(B(fromHtml, str));
                        arrayList.add(zd.b.C);
                    } else {
                        y.i("SubripDecoder", "Skipping invalid timing: " + t11);
                    }
                } catch (NumberFormatException unused) {
                    y.i("SubripDecoder", "Skipping invalid index: " + t10);
                }
            }
        }
        return new b((zd.b[]) arrayList.toArray(new zd.b[0]), zVar.d());
    }
}
