package t5;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
import android.graphics.Typeface;
import com.airbnb.lottie.n;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import l5.a0;
import o5.o;
import q5.b;
import r5.k;
import s5.q;
import u0.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends t5.b {
    private final StringBuilder D;
    private final RectF E;
    private final Matrix F;
    private final Paint G;
    private final Paint H;
    private final Map I;
    private final j J;
    private final List K;
    private final o L;
    private final n M;
    private final l5.i N;
    private o5.a O;
    private o5.a P;
    private o5.a Q;
    private o5.a R;
    private o5.a S;
    private o5.a T;
    private o5.a U;
    private o5.a V;
    private o5.a W;
    private o5.a X;

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
        static final /* synthetic */ int[] f50423a;

        static {
            int[] iArr = new int[b.a.values().length];
            f50423a = iArr;
            try {
                iArr[b.a.LEFT_ALIGN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50423a[b.a.RIGHT_ALIGN.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50423a[b.a.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(n nVar, e eVar) {
        super(nVar, eVar);
        r5.b bVar;
        r5.b bVar2;
        r5.a aVar;
        r5.a aVar2;
        this.D = new StringBuilder(2);
        this.E = new RectF();
        this.F = new Matrix();
        this.G = new a(1);
        this.H = new b(1);
        this.I = new HashMap();
        this.J = new j();
        this.K = new ArrayList();
        this.M = nVar;
        this.N = eVar.c();
        o a10 = eVar.t().a();
        this.L = a10;
        a10.a(this);
        i(a10);
        k u10 = eVar.u();
        if (u10 != null && (aVar2 = u10.f48701a) != null) {
            o5.a a11 = aVar2.a();
            this.O = a11;
            a11.a(this);
            i(this.O);
        }
        if (u10 != null && (aVar = u10.f48702b) != null) {
            o5.a a12 = aVar.a();
            this.Q = a12;
            a12.a(this);
            i(this.Q);
        }
        if (u10 != null && (bVar2 = u10.f48703c) != null) {
            o5.a a13 = bVar2.a();
            this.S = a13;
            a13.a(this);
            i(this.S);
        }
        if (u10 != null && (bVar = u10.f48704d) != null) {
            o5.a a14 = bVar.a();
            this.U = a14;
            a14.a(this);
            i(this.U);
        }
    }

    private String P(String str, int i10) {
        int codePointAt = str.codePointAt(i10);
        int charCount = Character.charCount(codePointAt) + i10;
        while (charCount < str.length()) {
            int codePointAt2 = str.codePointAt(charCount);
            if (!d0(codePointAt2)) {
                break;
            }
            charCount += Character.charCount(codePointAt2);
            codePointAt = (codePointAt * 31) + codePointAt2;
        }
        long j10 = codePointAt;
        if (this.J.c(j10)) {
            return (String) this.J.d(j10);
        }
        this.D.setLength(0);
        while (i10 < charCount) {
            int codePointAt3 = str.codePointAt(i10);
            this.D.appendCodePoint(codePointAt3);
            i10 += Character.charCount(codePointAt3);
        }
        String sb2 = this.D.toString();
        this.J.h(j10, sb2);
        return sb2;
    }

    private void Q(q5.b bVar, int i10) {
        int intValue;
        o5.a aVar = this.P;
        if (aVar != null) {
            this.G.setColor(((Integer) aVar.h()).intValue());
        } else {
            o5.a aVar2 = this.O;
            if (aVar2 != null) {
                this.G.setColor(((Integer) aVar2.h()).intValue());
            } else {
                this.G.setColor(bVar.f46564h);
            }
        }
        o5.a aVar3 = this.R;
        if (aVar3 != null) {
            this.H.setColor(((Integer) aVar3.h()).intValue());
        } else {
            o5.a aVar4 = this.Q;
            if (aVar4 != null) {
                this.H.setColor(((Integer) aVar4.h()).intValue());
            } else {
                this.H.setColor(bVar.f46565i);
            }
        }
        if (this.f50375x.h() == null) {
            intValue = 100;
        } else {
            intValue = ((Integer) this.f50375x.h().h()).intValue();
        }
        int i11 = (((intValue * SetSpanOperation.SPAN_MAX_PRIORITY) / 100) * i10) / SetSpanOperation.SPAN_MAX_PRIORITY;
        this.G.setAlpha(i11);
        this.H.setAlpha(i11);
        o5.a aVar5 = this.T;
        if (aVar5 != null) {
            this.H.setStrokeWidth(((Float) aVar5.h()).floatValue());
            return;
        }
        o5.a aVar6 = this.S;
        if (aVar6 != null) {
            this.H.setStrokeWidth(((Float) aVar6.h()).floatValue());
        } else {
            this.H.setStrokeWidth(bVar.f46566j * x5.j.e());
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

    private void S(q5.d dVar, float f10, q5.b bVar, Canvas canvas) {
        List a02 = a0(dVar);
        for (int i10 = 0; i10 < a02.size(); i10++) {
            Path t10 = ((n5.d) a02.get(i10)).t();
            t10.computeBounds(this.E, false);
            this.F.reset();
            this.F.preTranslate(0.0f, (-bVar.f46563g) * x5.j.e());
            this.F.preScale(f10, f10);
            t10.transform(this.F);
            if (bVar.f46567k) {
                V(t10, this.G, canvas);
                V(t10, this.H, canvas);
            } else {
                V(t10, this.H, canvas);
                V(t10, this.G, canvas);
            }
        }
    }

    private void T(String str, q5.b bVar, Canvas canvas) {
        if (bVar.f46567k) {
            R(str, this.G, canvas);
            R(str, this.H, canvas);
            return;
        }
        R(str, this.H, canvas);
        R(str, this.G, canvas);
    }

    private void U(String str, q5.b bVar, Canvas canvas, float f10) {
        int i10 = 0;
        while (i10 < str.length()) {
            String P = P(str, i10);
            i10 += P.length();
            T(P, bVar, canvas);
            canvas.translate(this.G.measureText(P) + f10, 0.0f);
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

    private void W(String str, q5.b bVar, q5.c cVar, Canvas canvas, float f10, float f11, float f12) {
        for (int i10 = 0; i10 < str.length(); i10++) {
            q5.d dVar = (q5.d) this.N.c().e(q5.d.c(str.charAt(i10), cVar.a(), cVar.c()));
            if (dVar != null) {
                S(dVar, f11, bVar, canvas);
                canvas.translate((((float) dVar.b()) * f11 * x5.j.e()) + f12, 0.0f);
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:21:0x008e  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void X(q5.b r13, q5.c r14, android.graphics.Canvas r15) {
        /*
            r12 = this;
            android.graphics.Typeface r0 = r12.c0(r14)
            if (r0 != 0) goto L9
        L6:
            r3 = r12
            goto Ld4
        L9:
            java.lang.String r1 = r13.f46557a
            com.airbnb.lottie.n r2 = r12.M
            l5.i0 r2 = r2.b0()
            if (r2 == 0) goto L1b
            java.lang.String r3 = r12.getName()
            java.lang.String r1 = r2.c(r3, r1)
        L1b:
            android.graphics.Paint r2 = r12.G
            r2.setTypeface(r0)
            o5.a r0 = r12.W
            if (r0 == 0) goto L2f
            java.lang.Object r0 = r0.h()
            java.lang.Float r0 = (java.lang.Float) r0
            float r0 = r0.floatValue()
            goto L31
        L2f:
            float r0 = r13.f46559c
        L31:
            android.graphics.Paint r2 = r12.G
            float r3 = x5.j.e()
            float r3 = r3 * r0
            r2.setTextSize(r3)
            android.graphics.Paint r2 = r12.H
            android.graphics.Paint r3 = r12.G
            android.graphics.Typeface r3 = r3.getTypeface()
            r2.setTypeface(r3)
            android.graphics.Paint r2 = r12.H
            android.graphics.Paint r3 = r12.G
            float r3 = r3.getTextSize()
            r2.setTextSize(r3)
            int r2 = r13.f46561e
            float r2 = (float) r2
            r3 = 1092616192(0x41200000, float:10.0)
            float r2 = r2 / r3
            o5.a r3 = r12.V
            if (r3 == 0) goto L67
            java.lang.Object r3 = r3.h()
            java.lang.Float r3 = (java.lang.Float) r3
            float r3 = r3.floatValue()
        L65:
            float r2 = r2 + r3
            goto L76
        L67:
            o5.a r3 = r12.U
            if (r3 == 0) goto L76
            java.lang.Object r3 = r3.h()
            java.lang.Float r3 = (java.lang.Float) r3
            float r3 = r3.floatValue()
            goto L65
        L76:
            float r3 = x5.j.e()
            float r2 = r2 * r3
            float r2 = r2 * r0
            r0 = 1120403456(0x42c80000, float:100.0)
            float r8 = r2 / r0
            java.util.List r0 = r12.b0(r1)
            int r1 = r0.size()
            r2 = 0
            r3 = -1
            r11 = r2
            r10 = r3
        L8c:
            if (r11 >= r1) goto L6
            java.lang.Object r3 = r0.get(r11)
            r4 = r3
            java.lang.String r4 = (java.lang.String) r4
            android.graphics.PointF r3 = r13.f46569m
            if (r3 != 0) goto L9c
            r3 = 0
        L9a:
            r5 = r3
            goto L9f
        L9c:
            float r3 = r3.x
            goto L9a
        L9f:
            r7 = 0
            r9 = 0
            r3 = r12
            r6 = r14
            java.util.List r14 = r3.f0(r4, r5, r6, r7, r8, r9)
            r4 = r2
        La8:
            int r5 = r14.size()
            if (r4 >= r5) goto Ld0
            java.lang.Object r5 = r14.get(r4)
            t5.i$d r5 = (t5.i.d) r5
            int r10 = r10 + 1
            r15.save()
            float r7 = t5.i.d.a(r5)
            boolean r7 = r12.e0(r15, r13, r10, r7)
            if (r7 == 0) goto Lca
            java.lang.String r5 = t5.i.d.b(r5)
            r12.U(r5, r13, r15, r8)
        Lca:
            r15.restore()
            int r4 = r4 + 1
            goto La8
        Ld0:
            int r11 = r11 + 1
            r14 = r6
            goto L8c
        Ld4:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: t5.i.X(q5.b, q5.c, android.graphics.Canvas):void");
    }

    /* JADX WARN: Removed duplicated region for block: B:16:0x0053  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void Y(q5.b r17, android.graphics.Matrix r18, q5.c r19, android.graphics.Canvas r20) {
        /*
            r16 = this;
            r0 = r16
            r7 = r17
            o5.a r1 = r0.W
            if (r1 == 0) goto L13
            java.lang.Object r1 = r1.h()
            java.lang.Float r1 = (java.lang.Float) r1
            float r1 = r1.floatValue()
            goto L15
        L13:
            float r1 = r7.f46559c
        L15:
            r2 = 1120403456(0x42c80000, float:100.0)
            float r4 = r1 / r2
            float r8 = x5.j.g(r18)
            java.lang.String r1 = r7.f46557a
            java.util.List r9 = r0.b0(r1)
            int r10 = r9.size()
            int r1 = r7.f46561e
            float r1 = (float) r1
            r2 = 1092616192(0x41200000, float:10.0)
            float r1 = r1 / r2
            o5.a r2 = r0.V
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
            o5.a r2 = r0.U
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
            if (r13 >= r10) goto Lae
            java.lang.Object r1 = r9.get(r13)
            java.lang.String r1 = (java.lang.String) r1
            android.graphics.PointF r2 = r7.f46569m
            if (r2 != 0) goto L5f
            r2 = 0
            goto L61
        L5f:
            float r2 = r2.x
        L61:
            r6 = 1
            r3 = r19
            java.util.List r14 = r0.f0(r1, r2, r3, r4, r5, r6)
            r15 = r11
        L69:
            int r1 = r14.size()
            if (r15 >= r1) goto La4
            java.lang.Object r1 = r14.get(r15)
            t5.i$d r1 = (t5.i.d) r1
            int r12 = r12 + 1
            r20.save()
            float r2 = t5.i.d.a(r1)
            r3 = r20
            boolean r2 = r0.e0(r3, r7, r12, r2)
            if (r2 == 0) goto L96
            java.lang.String r1 = t5.i.d.b(r1)
            r6 = r4
            r2 = r7
            r4 = r3
            r7 = r5
            r5 = r8
            r3 = r19
            r0.W(r1, r2, r3, r4, r5, r6, r7)
            r4 = r6
            goto L98
        L96:
            r7 = r5
            r5 = r8
        L98:
            r20.restore()
            int r15 = r15 + 1
            r0 = r16
            r8 = r5
            r5 = r7
            r7 = r17
            goto L69
        La4:
            r7 = r5
            r5 = r8
            int r13 = r13 + 1
            r0 = r16
            r5 = r7
            r7 = r17
            goto L51
        Lae:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: t5.i.Y(q5.b, android.graphics.Matrix, q5.c, android.graphics.Canvas):void");
    }

    private d Z(int i10) {
        for (int size = this.K.size(); size < i10; size++) {
            this.K.add(new d(null));
        }
        return (d) this.K.get(i10 - 1);
    }

    private List a0(q5.d dVar) {
        if (this.I.containsKey(dVar)) {
            return (List) this.I.get(dVar);
        }
        List a10 = dVar.a();
        int size = a10.size();
        ArrayList arrayList = new ArrayList(size);
        for (int i10 = 0; i10 < size; i10++) {
            arrayList.add(new n5.d(this.M, this, (q) a10.get(i10), this.N));
        }
        this.I.put(dVar, arrayList);
        return arrayList;
    }

    private List b0(String str) {
        return Arrays.asList(str.replaceAll("\r\n", "\r").replaceAll("\u0003", "\r").replaceAll(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\r").split("\r"));
    }

    private Typeface c0(q5.c cVar) {
        Typeface typeface;
        o5.a aVar = this.X;
        if (aVar != null && (typeface = (Typeface) aVar.h()) != null) {
            return typeface;
        }
        Typeface c02 = this.M.c0(cVar);
        if (c02 != null) {
            return c02;
        }
        return cVar.d();
    }

    private boolean d0(int i10) {
        if (Character.getType(i10) != 16 && Character.getType(i10) != 27 && Character.getType(i10) != 6 && Character.getType(i10) != 28 && Character.getType(i10) != 8 && Character.getType(i10) != 19) {
            return false;
        }
        return true;
    }

    private boolean e0(Canvas canvas, q5.b bVar, int i10, float f10) {
        float f11;
        float f12;
        PointF pointF = bVar.f46568l;
        PointF pointF2 = bVar.f46569m;
        float e10 = x5.j.e();
        float f13 = 0.0f;
        if (pointF == null) {
            f11 = 0.0f;
        } else {
            f11 = (bVar.f46562f * e10) + pointF.y;
        }
        float f14 = (i10 * bVar.f46562f * e10) + f11;
        if (this.M.I() && pointF2 != null && pointF != null && f14 >= pointF.y + pointF2.y + bVar.f46559c) {
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
        int i11 = c.f50423a[bVar.f46560d.ordinal()];
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

    private List f0(String str, float f10, q5.c cVar, float f11, float f12, boolean z10) {
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
                q5.d dVar = (q5.d) this.N.c().e(q5.d.c(charAt, cVar.a(), cVar.c()));
                if (dVar != null) {
                    measureText = ((float) dVar.b()) * f11 * x5.j.e();
                }
            } else {
                measureText = this.G.measureText(str.substring(i13, i13 + 1));
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
        return this.K.subList(0, i10);
    }

    @Override // t5.b, q5.f
    public void d(Object obj, y5.c cVar) {
        super.d(obj, cVar);
        if (obj == a0.f35813a) {
            o5.a aVar = this.P;
            if (aVar != null) {
                H(aVar);
            }
            if (cVar == null) {
                this.P = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.P = qVar;
            qVar.a(this);
            i(this.P);
        } else if (obj == a0.f35814b) {
            o5.a aVar2 = this.R;
            if (aVar2 != null) {
                H(aVar2);
            }
            if (cVar == null) {
                this.R = null;
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.R = qVar2;
            qVar2.a(this);
            i(this.R);
        } else if (obj == a0.f35831s) {
            o5.a aVar3 = this.T;
            if (aVar3 != null) {
                H(aVar3);
            }
            if (cVar == null) {
                this.T = null;
                return;
            }
            o5.q qVar3 = new o5.q(cVar);
            this.T = qVar3;
            qVar3.a(this);
            i(this.T);
        } else if (obj == a0.f35832t) {
            o5.a aVar4 = this.V;
            if (aVar4 != null) {
                H(aVar4);
            }
            if (cVar == null) {
                this.V = null;
                return;
            }
            o5.q qVar4 = new o5.q(cVar);
            this.V = qVar4;
            qVar4.a(this);
            i(this.V);
        } else if (obj == a0.F) {
            o5.a aVar5 = this.W;
            if (aVar5 != null) {
                H(aVar5);
            }
            if (cVar == null) {
                this.W = null;
                return;
            }
            o5.q qVar5 = new o5.q(cVar);
            this.W = qVar5;
            qVar5.a(this);
            i(this.W);
        } else if (obj == a0.M) {
            o5.a aVar6 = this.X;
            if (aVar6 != null) {
                H(aVar6);
            }
            if (cVar == null) {
                this.X = null;
                return;
            }
            o5.q qVar6 = new o5.q(cVar);
            this.X = qVar6;
            qVar6.a(this);
            i(this.X);
        } else if (obj == a0.O) {
            this.L.r(cVar);
        }
    }

    @Override // t5.b, n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        super.e(rectF, matrix, z10);
        rectF.set(0.0f, 0.0f, this.N.b().width(), this.N.b().height());
    }

    @Override // t5.b
    void u(Canvas canvas, Matrix matrix, int i10) {
        q5.b bVar = (q5.b) this.L.h();
        q5.c cVar = (q5.c) this.N.g().get(bVar.f46558b);
        if (cVar == null) {
            return;
        }
        canvas.save();
        canvas.concat(matrix);
        Q(bVar, i10);
        if (this.M.X0()) {
            Y(bVar, matrix, cVar, canvas);
        } else {
            X(bVar, cVar, canvas);
        }
        canvas.restore();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private String f50424a;

        /* renamed from: b  reason: collision with root package name */
        private float f50425b;

        private d() {
            this.f50424a = "";
            this.f50425b = 0.0f;
        }

        void c(String str, float f10) {
            this.f50424a = str;
            this.f50425b = f10;
        }

        /* synthetic */ d(a aVar) {
            this();
        }
    }
}
