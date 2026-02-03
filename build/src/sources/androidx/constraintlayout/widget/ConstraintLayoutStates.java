package androidx.constraintlayout.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.Log;
import android.util.SparseArray;
import android.util.Xml;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import org.xmlpull.v1.XmlPullParser;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ConstraintLayoutStates {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f2478a;

    /* renamed from: b  reason: collision with root package name */
    ConstraintSet f2479b;

    /* renamed from: c  reason: collision with root package name */
    int f2480c = -1;

    /* renamed from: d  reason: collision with root package name */
    int f2481d = -1;

    /* renamed from: e  reason: collision with root package name */
    private SparseArray f2482e = new SparseArray();

    /* renamed from: f  reason: collision with root package name */
    private SparseArray f2483f = new SparseArray();

    /* renamed from: g  reason: collision with root package name */
    private ConstraintsChangedListener f2484g = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        int f2485a;

        /* renamed from: b  reason: collision with root package name */
        ArrayList f2486b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        int f2487c;

        /* renamed from: d  reason: collision with root package name */
        ConstraintSet f2488d;

        a(Context context, XmlPullParser xmlPullParser) {
            this.f2487c = -1;
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(Xml.asAttributeSet(xmlPullParser), d.B6);
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                if (index == d.C6) {
                    this.f2485a = obtainStyledAttributes.getResourceId(index, this.f2485a);
                } else if (index == d.D6) {
                    this.f2487c = obtainStyledAttributes.getResourceId(index, this.f2487c);
                    String resourceTypeName = context.getResources().getResourceTypeName(this.f2487c);
                    context.getResources().getResourceName(this.f2487c);
                    if ("layout".equals(resourceTypeName)) {
                        ConstraintSet constraintSet = new ConstraintSet();
                        this.f2488d = constraintSet;
                        constraintSet.e(context, this.f2487c);
                    }
                }
            }
            obtainStyledAttributes.recycle();
        }

        void a(b bVar) {
            this.f2486b.add(bVar);
        }

        public int b(float f10, float f11) {
            for (int i10 = 0; i10 < this.f2486b.size(); i10++) {
                if (((b) this.f2486b.get(i10)).a(f10, f11)) {
                    return i10;
                }
            }
            return -1;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        float f2489a;

        /* renamed from: b  reason: collision with root package name */
        float f2490b;

        /* renamed from: c  reason: collision with root package name */
        float f2491c;

        /* renamed from: d  reason: collision with root package name */
        float f2492d;

        /* renamed from: e  reason: collision with root package name */
        int f2493e;

        /* renamed from: f  reason: collision with root package name */
        ConstraintSet f2494f;

        b(Context context, XmlPullParser xmlPullParser) {
            this.f2489a = Float.NaN;
            this.f2490b = Float.NaN;
            this.f2491c = Float.NaN;
            this.f2492d = Float.NaN;
            this.f2493e = -1;
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(Xml.asAttributeSet(xmlPullParser), d.U6);
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                if (index == d.V6) {
                    this.f2493e = obtainStyledAttributes.getResourceId(index, this.f2493e);
                    String resourceTypeName = context.getResources().getResourceTypeName(this.f2493e);
                    context.getResources().getResourceName(this.f2493e);
                    if ("layout".equals(resourceTypeName)) {
                        ConstraintSet constraintSet = new ConstraintSet();
                        this.f2494f = constraintSet;
                        constraintSet.e(context, this.f2493e);
                    }
                } else if (index == d.W6) {
                    this.f2492d = obtainStyledAttributes.getDimension(index, this.f2492d);
                } else if (index == d.X6) {
                    this.f2490b = obtainStyledAttributes.getDimension(index, this.f2490b);
                } else if (index == d.Y6) {
                    this.f2491c = obtainStyledAttributes.getDimension(index, this.f2491c);
                } else if (index == d.Z6) {
                    this.f2489a = obtainStyledAttributes.getDimension(index, this.f2489a);
                } else {
                    Log.v("ConstraintLayoutStates", "Unknown tag");
                }
            }
            obtainStyledAttributes.recycle();
        }

        boolean a(float f10, float f11) {
            if (!Float.isNaN(this.f2489a) && f10 < this.f2489a) {
                return false;
            }
            if (!Float.isNaN(this.f2490b) && f11 < this.f2490b) {
                return false;
            }
            if (!Float.isNaN(this.f2491c) && f10 > this.f2491c) {
                return false;
            }
            if (!Float.isNaN(this.f2492d) && f11 > this.f2492d) {
                return false;
            }
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ConstraintLayoutStates(Context context, ConstraintLayout constraintLayout, int i10) {
        this.f2478a = constraintLayout;
        a(context, i10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:40:0x0065, code lost:
        continue;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void a(android.content.Context r7, int r8) {
        /*
            r6 = this;
            java.lang.String r0 = "Error parsing resource: "
            java.lang.String r1 = "ConstraintLayoutStates"
            android.content.res.Resources r2 = r7.getResources()
            android.content.res.XmlResourceParser r2 = r2.getXml(r8)
            int r3 = r2.getEventType()     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            r4 = 0
        L11:
            r5 = 1
            if (r3 == r5) goto L8f
            r5 = 2
            if (r3 == r5) goto L18
            goto L65
        L18:
            java.lang.String r3 = r2.getName()     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            int r5 = r3.hashCode()     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            switch(r5) {
                case -1349929691: goto L5a;
                case 80204913: goto L44;
                case 1382829617: goto L41;
                case 1657696882: goto L3b;
                case 1901439077: goto L24;
                default: goto L23;
            }     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
        L23:
            goto L65
        L24:
            java.lang.String r5 = "Variant"
            boolean r3 = r3.equals(r5)     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            if (r3 == 0) goto L65
            androidx.constraintlayout.widget.ConstraintLayoutStates$b r3 = new androidx.constraintlayout.widget.ConstraintLayoutStates$b     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            r3.<init>(r7, r2)     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            if (r4 == 0) goto L65
            r4.a(r3)     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            goto L65
        L37:
            r7 = move-exception
            goto L6a
        L39:
            r7 = move-exception
            goto L7d
        L3b:
            java.lang.String r5 = "layoutDescription"
        L3d:
            r3.equals(r5)     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            goto L65
        L41:
            java.lang.String r5 = "StateSet"
            goto L3d
        L44:
            java.lang.String r5 = "State"
            boolean r3 = r3.equals(r5)     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            if (r3 == 0) goto L65
            androidx.constraintlayout.widget.ConstraintLayoutStates$a r3 = new androidx.constraintlayout.widget.ConstraintLayoutStates$a     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            r3.<init>(r7, r2)     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            android.util.SparseArray r4 = r6.f2482e     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            int r5 = r3.f2485a     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            r4.put(r5, r3)     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            r4 = r3
            goto L65
        L5a:
            java.lang.String r5 = "ConstraintSet"
            boolean r3 = r3.equals(r5)     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            if (r3 == 0) goto L65
            r6.b(r7, r2)     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
        L65:
            int r3 = r2.next()     // Catch: java.io.IOException -> L37 org.xmlpull.v1.XmlPullParserException -> L39
            goto L11
        L6a:
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            r2.append(r0)
            r2.append(r8)
            java.lang.String r8 = r2.toString()
            android.util.Log.e(r1, r8, r7)
            goto L8f
        L7d:
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            r2.append(r0)
            r2.append(r8)
            java.lang.String r8 = r2.toString()
            android.util.Log.e(r1, r8, r7)
        L8f:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.constraintlayout.widget.ConstraintLayoutStates.a(android.content.Context, int):void");
    }

    private void b(Context context, XmlPullParser xmlPullParser) {
        int i10;
        ConstraintSet constraintSet = new ConstraintSet();
        int attributeCount = xmlPullParser.getAttributeCount();
        for (int i11 = 0; i11 < attributeCount; i11++) {
            String attributeName = xmlPullParser.getAttributeName(i11);
            String attributeValue = xmlPullParser.getAttributeValue(i11);
            if (attributeName != null && attributeValue != null && StackTraceHelper.ID_KEY.equals(attributeName)) {
                if (attributeValue.contains("/")) {
                    i10 = context.getResources().getIdentifier(attributeValue.substring(attributeValue.indexOf(47) + 1), StackTraceHelper.ID_KEY, context.getPackageName());
                } else {
                    i10 = -1;
                }
                if (i10 == -1) {
                    if (attributeValue.length() > 1) {
                        i10 = Integer.parseInt(attributeValue.substring(1));
                    } else {
                        Log.e("ConstraintLayoutStates", "error in parsing id");
                    }
                }
                constraintSet.t(context, xmlPullParser);
                this.f2483f.put(i10, constraintSet);
                return;
            }
        }
    }

    public void c(ConstraintsChangedListener constraintsChangedListener) {
        this.f2484g = constraintsChangedListener;
    }

    public void d(int i10, float f10, float f11) {
        ConstraintSet constraintSet;
        int i11;
        a aVar;
        int b10;
        ConstraintSet constraintSet2;
        int i12;
        int i13 = this.f2480c;
        if (i13 == i10) {
            if (i10 == -1) {
                aVar = (a) this.f2482e.valueAt(0);
            } else {
                aVar = (a) this.f2482e.get(i13);
            }
            int i14 = this.f2481d;
            if ((i14 == -1 || !((b) aVar.f2486b.get(i14)).a(f10, f11)) && this.f2481d != (b10 = aVar.b(f10, f11))) {
                if (b10 == -1) {
                    constraintSet2 = this.f2479b;
                } else {
                    constraintSet2 = ((b) aVar.f2486b.get(b10)).f2494f;
                }
                if (b10 == -1) {
                    i12 = aVar.f2487c;
                } else {
                    i12 = ((b) aVar.f2486b.get(b10)).f2493e;
                }
                if (constraintSet2 != null) {
                    this.f2481d = b10;
                    ConstraintsChangedListener constraintsChangedListener = this.f2484g;
                    if (constraintsChangedListener != null) {
                        constraintsChangedListener.b(-1, i12);
                    }
                    constraintSet2.c(this.f2478a);
                    ConstraintsChangedListener constraintsChangedListener2 = this.f2484g;
                    if (constraintsChangedListener2 != null) {
                        constraintsChangedListener2.a(-1, i12);
                        return;
                    }
                    return;
                }
                return;
            }
            return;
        }
        this.f2480c = i10;
        a aVar2 = (a) this.f2482e.get(i10);
        int b11 = aVar2.b(f10, f11);
        if (b11 == -1) {
            constraintSet = aVar2.f2488d;
        } else {
            constraintSet = ((b) aVar2.f2486b.get(b11)).f2494f;
        }
        if (b11 == -1) {
            i11 = aVar2.f2487c;
        } else {
            i11 = ((b) aVar2.f2486b.get(b11)).f2493e;
        }
        if (constraintSet == null) {
            Log.v("ConstraintLayoutStates", "NO Constraint set found ! id=" + i10 + ", dim =" + f10 + ", " + f11);
            return;
        }
        this.f2481d = b11;
        ConstraintsChangedListener constraintsChangedListener3 = this.f2484g;
        if (constraintsChangedListener3 != null) {
            constraintsChangedListener3.b(i10, i11);
        }
        constraintSet.c(this.f2478a);
        ConstraintsChangedListener constraintsChangedListener4 = this.f2484g;
        if (constraintsChangedListener4 != null) {
            constraintsChangedListener4.a(i10, i11);
        }
    }
}
