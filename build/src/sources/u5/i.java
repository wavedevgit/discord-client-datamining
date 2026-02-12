package u5;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
import android.graphics.Typeface;
import com.airbnb.lottie.n;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import l5.b0;
import o5.o;
import r5.b;
import s5.k;
import s5.l;
import s5.m;
import t5.q;
import t5.u;
import u0.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends u5.b {
    private final StringBuilder E;
    private final RectF F;
    private final Matrix G;
    private final Paint H;
    private final Paint I;
    private final Map J;
    private final j K;
    private final List L;
    private final o M;
    private final n N;
    private final l5.i O;
    private u P;
    private o5.a Q;
    private o5.a R;
    private o5.a S;
    private o5.a T;
    private o5.a U;
    private o5.a V;
    private o5.a W;
    private o5.a X;
    private o5.a Y;
    private o5.a Z;

    /* renamed from: a0  reason: collision with root package name */
    private o5.a f50505a0;

    /* renamed from: b0  reason: collision with root package name */
    private o5.a f50506b0;

    /* renamed from: c0  reason: collision with root package name */
    private o5.a f50507c0;

    /* renamed from: d0  reason: collision with root package name */
    private o5.a f50508d0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends Paint {
        a(int i10) {
            super(i10);
            setStyle(Paint.Style.FILL);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends Paint {
        b(int i10) {
            super(i10);
            setStyle(Paint.Style.STROKE);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class c {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50511a;

        static {
            int[] iArr = new int[b.a.values().length];
            f50511a = iArr;
            try {
                iArr[b.a.LEFT_ALIGN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50511a[b.a.RIGHT_ALIGN.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50511a[b.a.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(n nVar, e eVar) {
        super(nVar, eVar);
        l lVar;
        l lVar2;
        s5.d dVar;
        l lVar3;
        s5.d dVar2;
        l lVar4;
        s5.d dVar3;
        m mVar;
        s5.d dVar4;
        m mVar2;
        s5.b bVar;
        m mVar3;
        s5.b bVar2;
        m mVar4;
        s5.a aVar;
        m mVar5;
        s5.a aVar2;
        this.E = new StringBuilder(2);
        this.F = new RectF();
        this.G = new Matrix();
        this.H = new a(1);
        this.I = new b(1);
        this.J = new HashMap();
        this.K = new j();
        this.L = new ArrayList();
        this.P = u.INDEX;
        this.N = nVar;
        this.O = eVar.c();
        o a10 = eVar.t().a();
        this.M = a10;
        a10.a(this);
        i(a10);
        k u10 = eVar.u();
        if (u10 != null && (mVar5 = u10.f47836a) != null && (aVar2 = mVar5.f47842a) != null) {
            o5.a a11 = aVar2.a();
            this.Q = a11;
            a11.a(this);
            i(this.Q);
        }
        if (u10 != null && (mVar4 = u10.f47836a) != null && (aVar = mVar4.f47843b) != null) {
            o5.a a12 = aVar.a();
            this.S = a12;
            a12.a(this);
            i(this.S);
        }
        if (u10 != null && (mVar3 = u10.f47836a) != null && (bVar2 = mVar3.f47844c) != null) {
            o5.d a13 = bVar2.a();
            this.U = a13;
            a13.a(this);
            i(this.U);
        }
        if (u10 != null && (mVar2 = u10.f47836a) != null && (bVar = mVar2.f47845d) != null) {
            o5.d a14 = bVar.a();
            this.W = a14;
            a14.a(this);
            i(this.W);
        }
        if (u10 != null && (mVar = u10.f47836a) != null && (dVar4 = mVar.f47846e) != null) {
            o5.a a15 = dVar4.a();
            this.Y = a15;
            a15.a(this);
            i(this.Y);
        }
        if (u10 != null && (lVar4 = u10.f47837b) != null && (dVar3 = lVar4.f47838a) != null) {
            o5.a a16 = dVar3.a();
            this.f50506b0 = a16;
            a16.a(this);
            i(this.f50506b0);
        }
        if (u10 != null && (lVar3 = u10.f47837b) != null && (dVar2 = lVar3.f47839b) != null) {
            o5.a a17 = dVar2.a();
            this.f50507c0 = a17;
            a17.a(this);
            i(this.f50507c0);
        }
        if (u10 != null && (lVar2 = u10.f47837b) != null && (dVar = lVar2.f47840c) != null) {
            o5.a a18 = dVar.a();
            this.f50508d0 = a18;
            a18.a(this);
            i(this.f50508d0);
        }
        if (u10 != null && (lVar = u10.f47837b) != null) {
            this.P = lVar.f47841d;
        }
    }

    private String P(String str, int i10) {
        int codePointAt = str.codePointAt(i10);
        int charCount = Character.charCount(codePointAt) + i10;
        while (charCount < str.length()) {
            int codePointAt2 = str.codePointAt(charCount);
            if (!e0(codePointAt2)) {
                break;
            }
            charCount += Character.charCount(codePointAt2);
            codePointAt = (codePointAt * 31) + codePointAt2;
        }
        long j10 = codePointAt;
        if (this.K.c(j10)) {
            return (String) this.K.d(j10);
        }
        this.E.setLength(0);
        while (i10 < charCount) {
            int codePointAt3 = str.codePointAt(i10);
            this.E.appendCodePoint(codePointAt3);
            i10 += Character.charCount(codePointAt3);
        }
        String sb2 = this.E.toString();
        this.K.g(j10, sb2);
        return sb2;
    }

    private void Q(r5.b bVar, int i10, int i11) {
        int intValue;
        o5.a aVar = this.R;
        if (aVar != null) {
            this.H.setColor(((Integer) aVar.h()).intValue());
        } else if (this.Q != null && d0(i11)) {
            this.H.setColor(((Integer) this.Q.h()).intValue());
        } else {
            this.H.setColor(bVar.f46137h);
        }
        o5.a aVar2 = this.T;
        if (aVar2 != null) {
            this.I.setColor(((Integer) aVar2.h()).intValue());
        } else if (this.S != null && d0(i11)) {
            this.I.setColor(((Integer) this.S.h()).intValue());
        } else {
            this.I.setColor(bVar.f46138i);
        }
        int i12 = 100;
        if (this.f50459x.h() == null) {
            intValue = 100;
        } else {
            intValue = ((Integer) this.f50459x.h().h()).intValue();
        }
        if (this.Y != null && d0(i11)) {
            i12 = ((Integer) this.Y.h()).intValue();
        }
        int round = Math.round(((((intValue * 255.0f) / 100.0f) * (i12 / 100.0f)) * i10) / 255.0f);
        this.H.setAlpha(round);
        this.I.setAlpha(round);
        o5.a aVar3 = this.V;
        if (aVar3 != null) {
            this.I.setStrokeWidth(((Float) aVar3.h()).floatValue());
        } else if (this.U != null && d0(i11)) {
            this.I.setStrokeWidth(((Float) this.U.h()).floatValue());
        } else {
            this.I.setStrokeWidth(bVar.f46139j * y5.j.e());
        }
    }

    private void R(String str, Paint paint, Canvas canvas) {
        if (paint.getColor() != 0) {
            if (paint.getStyle() == Paint.Style.STROKE && paint.getStrokeWidth() == 0.0f) {
                return;
            }
            canvas.drawText(str, 0, str.length(), 0.0f, 0.0f, paint);
        }
    }

    private void S(r5.d dVar, float f10, r5.b bVar, Canvas canvas, int i10, int i11) {
        Q(bVar, i11, i10);
        List a02 = a0(dVar);
        for (int i12 = 0; i12 < a02.size(); i12++) {
            Path t10 = ((n5.d) a02.get(i12)).t();
            t10.computeBounds(this.F, false);
            this.G.reset();
            this.G.preTranslate(0.0f, (-bVar.f46136g) * y5.j.e());
            this.G.preScale(f10, f10);
            t10.transform(this.G);
            if (bVar.f46140k) {
                V(t10, this.H, canvas);
                V(t10, this.I, canvas);
            } else {
                V(t10, this.I, canvas);
                V(t10, this.H, canvas);
            }
        }
    }

    private void T(String str, r5.b bVar, Canvas canvas, int i10, int i11) {
        Q(bVar, i11, i10);
        if (bVar.f46140k) {
            R(str, this.H, canvas);
            R(str, this.I, canvas);
            return;
        }
        R(str, this.I, canvas);
        R(str, this.H, canvas);
    }

    private void U(String str, r5.b bVar, Canvas canvas, float f10, int i10, int i11) {
        int i12 = 0;
        while (i12 < str.length()) {
            String P = P(str, i12);
            r5.b bVar2 = bVar;
            Canvas canvas2 = canvas;
            T(P, bVar2, canvas2, i10 + i12, i11);
            canvas2.translate(this.H.measureText(P) + f10, 0.0f);
            i12 += P.length();
            bVar = bVar2;
            canvas = canvas2;
        }
    }

    private void V(Path path, Paint paint, Canvas canvas) {
        if (paint.getColor() != 0) {
            if (paint.getStyle() == Paint.Style.STROKE && paint.getStrokeWidth() == 0.0f) {
                return;
            }
            canvas.drawPath(path, paint);
        }
    }

    private void W(String str, r5.b bVar, r5.c cVar, Canvas canvas, float f10, float f11, float f12, int i10) {
        r5.b bVar2;
        Canvas canvas2;
        float f13;
        int i11;
        int i12 = 0;
        while (i12 < str.length()) {
            r5.d dVar = (r5.d) this.O.c().e(r5.d.c(str.charAt(i12), cVar.a(), cVar.c()));
            if (dVar == null) {
                bVar2 = bVar;
                canvas2 = canvas;
                f13 = f11;
                i11 = i10;
            } else {
                bVar2 = bVar;
                canvas2 = canvas;
                f13 = f11;
                i11 = i10;
                S(dVar, f13, bVar2, canvas2, i12, i11);
                canvas2.translate((((float) dVar.b()) * f13 * y5.j.e()) + f12, 0.0f);
            }
            i12++;
            f11 = f13;
            bVar = bVar2;
            canvas = canvas2;
            i10 = i11;
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:21:0x0093  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void X(r5.b r18, r5.c r19, android.graphics.Canvas r20, int r21) {
        /*
            Method dump skipped, instructions count: 249
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: u5.i.X(r5.b, r5.c, android.graphics.Canvas, int):void");
    }

    /* JADX WARN: Removed duplicated region for block: B:16:0x0053  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void Y(r5.b r17, android.graphics.Matrix r18, r5.c r19, android.graphics.Canvas r20, int r21) {
        /*
            r16 = this;
            r0 = r16
            r7 = r17
            o5.a r1 = r0.Z
            if (r1 == 0) goto L13
            java.lang.Object r1 = r1.h()
            java.lang.Float r1 = (java.lang.Float) r1
            float r1 = r1.floatValue()
            goto L15
        L13:
            float r1 = r7.f46132c
        L15:
            r2 = 1120403456(0x42c80000, float:100.0)
            float r4 = r1 / r2
            float r8 = y5.j.g(r18)
            java.lang.String r1 = r7.f46130a
            java.util.List r9 = r0.b0(r1)
            int r10 = r9.size()
            int r1 = r7.f46134e
            float r1 = (float) r1
            r2 = 1092616192(0x41200000, float:10.0)
            float r1 = r1 / r2
            o5.a r2 = r0.X
            if (r2 == 0) goto L3e
            java.lang.Object r2 = r2.h()
            java.lang.Float r2 = (java.lang.Float) r2
            float r2 = r2.floatValue()
        L3b:
            float r1 = r1 + r2
        L3c:
            r5 = r1
            goto L4d
        L3e:
            o5.a r2 = r0.W
            if (r2 == 0) goto L3c
            java.lang.Object r2 = r2.h()
            java.lang.Float r2 = (java.lang.Float) r2
            float r2 = r2.floatValue()
            goto L3b
        L4d:
            r11 = 0
            r1 = -1
            r12 = r1
            r13 = r11
        L51:
            if (r13 >= r10) goto Lb0
            java.lang.Object r1 = r9.get(r13)
            java.lang.String r1 = (java.lang.String) r1
            android.graphics.PointF r2 = r7.f46142m
            if (r2 != 0) goto L5f
            r2 = 0
            goto L61
        L5f:
            float r2 = r2.x
        L61:
            r6 = 1
            r3 = r19
            java.util.List r14 = r0.g0(r1, r2, r3, r4, r5, r6)
            r15 = r11
        L69:
            int r1 = r14.size()
            if (r15 >= r1) goto La6
            java.lang.Object r1 = r14.get(r15)
            u5.i$d r1 = (u5.i.d) r1
            int r12 = r12 + 1
            r20.save()
            float r2 = u5.i.d.a(r1)
            r3 = r20
            boolean r2 = r0.f0(r3, r7, r12, r2)
            if (r2 == 0) goto L98
            java.lang.String r1 = u5.i.d.b(r1)
            r6 = r4
            r2 = r7
            r4 = r3
            r7 = r5
            r5 = r8
            r3 = r19
            r8 = r21
            r0.W(r1, r2, r3, r4, r5, r6, r7, r8)
            r4 = r6
            goto L9a
        L98:
            r7 = r5
            r5 = r8
        L9a:
            r20.restore()
            int r15 = r15 + 1
            r0 = r16
            r8 = r5
            r5 = r7
            r7 = r17
            goto L69
        La6:
            r7 = r5
            r5 = r8
            int r13 = r13 + 1
            r0 = r16
            r5 = r7
            r7 = r17
            goto L51
        Lb0:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: u5.i.Y(r5.b, android.graphics.Matrix, r5.c, android.graphics.Canvas, int):void");
    }

    private d Z(int i10) {
        for (int size = this.L.size(); size < i10; size++) {
            this.L.add(new d(null));
        }
        return (d) this.L.get(i10 - 1);
    }

    private List a0(r5.d dVar) {
        if (this.J.containsKey(dVar)) {
            return (List) this.J.get(dVar);
        }
        List a10 = dVar.a();
        int size = a10.size();
        ArrayList arrayList = new ArrayList(size);
        for (int i10 = 0; i10 < size; i10++) {
            arrayList.add(new n5.d(this.N, this, (q) a10.get(i10), this.O));
        }
        this.J.put(dVar, arrayList);
        return arrayList;
    }

    private List b0(String str) {
        return Arrays.asList(str.replaceAll("\r\n", "\r").replaceAll("\u0003", "\r").replaceAll(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\r").split("\r"));
    }

    private Typeface c0(r5.c cVar) {
        Typeface typeface;
        o5.a aVar = this.f50505a0;
        if (aVar != null && (typeface = (Typeface) aVar.h()) != null) {
            return typeface;
        }
        Typeface b02 = this.N.b0(cVar);
        if (b02 != null) {
            return b02;
        }
        return cVar.d();
    }

    private boolean d0(int i10) {
        int length = ((r5.b) this.M.h()).f46130a.length();
        o5.a aVar = this.f50506b0;
        if (aVar == null || this.f50507c0 == null) {
            return true;
        }
        int min = Math.min(((Integer) aVar.h()).intValue(), ((Integer) this.f50507c0.h()).intValue());
        int max = Math.max(((Integer) this.f50506b0.h()).intValue(), ((Integer) this.f50507c0.h()).intValue());
        o5.a aVar2 = this.f50508d0;
        if (aVar2 != null) {
            int intValue = ((Integer) aVar2.h()).intValue();
            min += intValue;
            max += intValue;
        }
        if (this.P == u.INDEX) {
            if (i10 >= min && i10 < max) {
                return true;
            }
            return false;
        }
        float f10 = (i10 / length) * 100.0f;
        if (f10 >= min && f10 < max) {
            return true;
        }
        return false;
    }

    private boolean e0(int i10) {
        if (Character.getType(i10) != 16 && Character.getType(i10) != 27 && Character.getType(i10) != 6 && Character.getType(i10) != 28 && Character.getType(i10) != 8 && Character.getType(i10) != 19) {
            return false;
        }
        return true;
    }

    private boolean f0(Canvas canvas, r5.b bVar, int i10, float f10) {
        float f11;
        float f12;
        PointF pointF = bVar.f46141l;
        PointF pointF2 = bVar.f46142m;
        float e10 = y5.j.e();
        float f13 = 0.0f;
        if (pointF == null) {
            f11 = 0.0f;
        } else {
            f11 = (bVar.f46135f * e10) + pointF.y;
        }
        float f14 = (i10 * bVar.f46135f * e10) + f11;
        if (this.N.H() && pointF2 != null && pointF != null && f14 >= pointF.y + pointF2.y + bVar.f46132c) {
            return false;
        }
        if (pointF == null) {
            f12 = 0.0f;
        } else {
            f12 = pointF.x;
        }
        if (pointF2 != null) {
            f13 = pointF2.x;
        }
        int i11 = c.f50511a[bVar.f46133d.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    canvas.translate((f12 + (f13 / 2.0f)) - (f10 / 2.0f), f14);
                }
            } else {
                canvas.translate((f12 + f13) - f10, f14);
            }
        } else {
            canvas.translate(f12, f14);
        }
        return true;
    }

    private List g0(String str, float f10, r5.c cVar, float f11, float f12, boolean z10) {
        float measureText;
        String substring;
        String trim;
        String substring2;
        String trim2;
        int i10 = 0;
        int i11 = 0;
        boolean z11 = false;
        int i12 = 0;
        float f13 = 0.0f;
        float f14 = 0.0f;
        float f15 = 0.0f;
        for (int i13 = 0; i13 < str.length(); i13++) {
            char charAt = str.charAt(i13);
            if (z10) {
                r5.d dVar = (r5.d) this.O.c().e(r5.d.c(charAt, cVar.a(), cVar.c()));
                if (dVar != null) {
                    measureText = ((float) dVar.b()) * f11 * y5.j.e();
                }
            } else {
                measureText = this.H.measureText(str.substring(i13, i13 + 1));
            }
            float f16 = measureText + f12;
            if (charAt == ' ') {
                z11 = true;
                f15 = f16;
            } else if (z11) {
                z11 = false;
                i12 = i13;
                f14 = f16;
            } else {
                f14 += f16;
            }
            f13 += f16;
            if (f10 > 0.0f && f13 >= f10 && charAt != ' ') {
                i10++;
                d Z = Z(i10);
                if (i12 == i11) {
                    Z.c(str.substring(i11, i13).trim(), (f13 - f16) - ((trim2.length() - substring2.length()) * f15));
                    i11 = i13;
                    i12 = i11;
                    f13 = f16;
                    f14 = f13;
                } else {
                    Z.c(str.substring(i11, i12 - 1).trim(), ((f13 - f14) - ((substring.length() - trim.length()) * f15)) - f15);
                    f13 = f14;
                    i11 = i12;
                }
            }
        }
        if (f13 > 0.0f) {
            i10++;
            Z(i10).c(str.substring(i11), f13);
        }
        return this.L.subList(0, i10);
    }

    @Override // u5.b, r5.f
    public void d(Object obj, z5.c cVar) {
        super.d(obj, cVar);
        if (obj == b0.f35546a) {
            o5.a aVar = this.R;
            if (aVar != null) {
                H(aVar);
            }
            if (cVar == null) {
                this.R = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.R = qVar;
            qVar.a(this);
            i(this.R);
        } else if (obj == b0.f35547b) {
            o5.a aVar2 = this.T;
            if (aVar2 != null) {
                H(aVar2);
            }
            if (cVar == null) {
                this.T = null;
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.T = qVar2;
            qVar2.a(this);
            i(this.T);
        } else if (obj == b0.f35564s) {
            o5.a aVar3 = this.V;
            if (aVar3 != null) {
                H(aVar3);
            }
            if (cVar == null) {
                this.V = null;
                return;
            }
            o5.q qVar3 = new o5.q(cVar);
            this.V = qVar3;
            qVar3.a(this);
            i(this.V);
        } else if (obj == b0.f35565t) {
            o5.a aVar4 = this.X;
            if (aVar4 != null) {
                H(aVar4);
            }
            if (cVar == null) {
                this.X = null;
                return;
            }
            o5.q qVar4 = new o5.q(cVar);
            this.X = qVar4;
            qVar4.a(this);
            i(this.X);
        } else if (obj == b0.F) {
            o5.a aVar5 = this.Z;
            if (aVar5 != null) {
                H(aVar5);
            }
            if (cVar == null) {
                this.Z = null;
                return;
            }
            o5.q qVar5 = new o5.q(cVar);
            this.Z = qVar5;
            qVar5.a(this);
            i(this.Z);
        } else if (obj == b0.M) {
            o5.a aVar6 = this.f50505a0;
            if (aVar6 != null) {
                H(aVar6);
            }
            if (cVar == null) {
                this.f50505a0 = null;
                return;
            }
            o5.q qVar6 = new o5.q(cVar);
            this.f50505a0 = qVar6;
            qVar6.a(this);
            i(this.f50505a0);
        } else if (obj == b0.O) {
            this.M.r(cVar);
        }
    }

    @Override // u5.b, n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        super.f(rectF, matrix, z10);
        rectF.set(0.0f, 0.0f, this.O.b().width(), this.O.b().height());
    }

    @Override // u5.b
    void u(Canvas canvas, Matrix matrix, int i10) {
        Canvas canvas2;
        r5.b bVar = (r5.b) this.M.h();
        r5.c cVar = (r5.c) this.O.g().get(bVar.f46131b);
        if (cVar == null) {
            return;
        }
        canvas.save();
        canvas.concat(matrix);
        Q(bVar, i10, 0);
        if (this.N.W0()) {
            canvas2 = canvas;
            Y(bVar, matrix, cVar, canvas2, i10);
        } else {
            canvas2 = canvas;
            X(bVar, cVar, canvas2, i10);
        }
        canvas2.restore();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private String f50512a;

        /* renamed from: b  reason: collision with root package name */
        private float f50513b;

        private d() {
            this.f50512a = "";
            this.f50513b = 0.0f;
        }

        void c(String str, float f10) {
            this.f50512a = str;
            this.f50513b = f10;
        }

        /* synthetic */ d(a aVar) {
            this();
        }
    }
}
