package q1;

import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.LinearGradient;
import android.graphics.RadialGradient;
import android.graphics.Shader;
import android.graphics.SweepGradient;
import android.util.AttributeSet;
import java.util.List;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h {
    private static a a(a aVar, int i10, int i11, boolean z10, int i12) {
        if (aVar != null) {
            return aVar;
        }
        if (z10) {
            return new a(i10, i12, i11);
        }
        return new a(i10, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Shader b(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        String name = xmlPullParser.getName();
        if (name.equals("gradient")) {
            TypedArray i10 = m.i(resources, theme, attributeSet, o1.g.F);
            float f10 = m.f(i10, xmlPullParser, "startX", o1.g.O, 0.0f);
            float f11 = m.f(i10, xmlPullParser, "startY", o1.g.P, 0.0f);
            float f12 = m.f(i10, xmlPullParser, "endX", o1.g.Q, 0.0f);
            float f13 = m.f(i10, xmlPullParser, "endY", o1.g.R, 0.0f);
            float f14 = m.f(i10, xmlPullParser, "centerX", o1.g.J, 0.0f);
            float f15 = m.f(i10, xmlPullParser, "centerY", o1.g.K, 0.0f);
            int g10 = m.g(i10, xmlPullParser, "type", o1.g.I, 0);
            int b10 = m.b(i10, xmlPullParser, "startColor", o1.g.G, 0);
            boolean h10 = m.h(xmlPullParser, "centerColor");
            int b11 = m.b(i10, xmlPullParser, "centerColor", o1.g.N, 0);
            int b12 = m.b(i10, xmlPullParser, "endColor", o1.g.H, 0);
            int g11 = m.g(i10, xmlPullParser, "tileMode", o1.g.M, 0);
            float f16 = m.f(i10, xmlPullParser, "gradientRadius", o1.g.L, 0.0f);
            i10.recycle();
            a a10 = a(c(resources, xmlPullParser, attributeSet, theme), b10, b12, h10, b11);
            if (g10 != 1) {
                if (g10 != 2) {
                    return new LinearGradient(f10, f11, f12, f13, a10.f47098a, a10.f47099b, d(g11));
                }
                return new SweepGradient(f14, f15, a10.f47098a, a10.f47099b);
            } else if (f16 > 0.0f) {
                return new RadialGradient(f14, f15, f16, a10.f47098a, a10.f47099b, d(g11));
            } else {
                throw new XmlPullParserException("<gradient> tag requires 'gradientRadius' attribute with radial type");
            }
        }
        throw new XmlPullParserException(xmlPullParser.getPositionDescription() + ": invalid gradient color tag " + name);
    }

    /* JADX WARN: Code restructure failed: missing block: B:21:0x0084, code lost:
        throw new org.xmlpull.v1.XmlPullParserException(r9.getPositionDescription() + ": <item> tag requires a 'color' attribute and a 'offset' attribute!");
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static q1.h.a c(android.content.res.Resources r8, org.xmlpull.v1.XmlPullParser r9, android.util.AttributeSet r10, android.content.res.Resources.Theme r11) {
        /*
            int r0 = r9.getDepth()
            r1 = 1
            int r0 = r0 + r1
            java.util.ArrayList r2 = new java.util.ArrayList
            r3 = 20
            r2.<init>(r3)
            java.util.ArrayList r4 = new java.util.ArrayList
            r4.<init>(r3)
        L12:
            int r3 = r9.next()
            if (r3 == r1) goto L85
            int r5 = r9.getDepth()
            if (r5 >= r0) goto L21
            r6 = 3
            if (r3 == r6) goto L85
        L21:
            r6 = 2
            if (r3 == r6) goto L25
            goto L12
        L25:
            if (r5 > r0) goto L12
            java.lang.String r3 = r9.getName()
            java.lang.String r5 = "item"
            boolean r3 = r3.equals(r5)
            if (r3 != 0) goto L34
            goto L12
        L34:
            int[] r3 = o1.g.S
            android.content.res.TypedArray r3 = q1.m.i(r8, r11, r10, r3)
            int r5 = o1.g.T
            boolean r5 = r3.hasValue(r5)
            int r6 = o1.g.U
            boolean r6 = r3.hasValue(r6)
            if (r5 == 0) goto L6a
            if (r6 == 0) goto L6a
            int r5 = o1.g.T
            r6 = 0
            int r5 = r3.getColor(r5, r6)
            int r6 = o1.g.U
            r7 = 0
            float r6 = r3.getFloat(r6, r7)
            r3.recycle()
            java.lang.Integer r3 = java.lang.Integer.valueOf(r5)
            r4.add(r3)
            java.lang.Float r3 = java.lang.Float.valueOf(r6)
            r2.add(r3)
            goto L12
        L6a:
            org.xmlpull.v1.XmlPullParserException r8 = new org.xmlpull.v1.XmlPullParserException
            java.lang.StringBuilder r10 = new java.lang.StringBuilder
            r10.<init>()
            java.lang.String r9 = r9.getPositionDescription()
            r10.append(r9)
            java.lang.String r9 = ": <item> tag requires a 'color' attribute and a 'offset' attribute!"
            r10.append(r9)
            java.lang.String r9 = r10.toString()
            r8.<init>(r9)
            throw r8
        L85:
            int r8 = r4.size()
            if (r8 <= 0) goto L91
            q1.h$a r8 = new q1.h$a
            r8.<init>(r4, r2)
            return r8
        L91:
            r8 = 0
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: q1.h.c(android.content.res.Resources, org.xmlpull.v1.XmlPullParser, android.util.AttributeSet, android.content.res.Resources$Theme):q1.h$a");
    }

    private static Shader.TileMode d(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return Shader.TileMode.CLAMP;
            }
            return Shader.TileMode.MIRROR;
        }
        return Shader.TileMode.REPEAT;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final int[] f47098a;

        /* renamed from: b  reason: collision with root package name */
        final float[] f47099b;

        a(List list, List list2) {
            int size = list.size();
            this.f47098a = new int[size];
            this.f47099b = new float[size];
            for (int i10 = 0; i10 < size; i10++) {
                this.f47098a[i10] = ((Integer) list.get(i10)).intValue();
                this.f47099b[i10] = ((Float) list2.get(i10)).floatValue();
            }
        }

        a(int i10, int i11) {
            this.f47098a = new int[]{i10, i11};
            this.f47099b = new float[]{0.0f, 1.0f};
        }

        a(int i10, int i11, int i12) {
            this.f47098a = new int[]{i10, i11, i12};
            this.f47099b = new float[]{0.0f, 0.5f, 1.0f};
        }
    }
}
