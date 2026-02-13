package th;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.content.res.XmlResourceParser;
import android.util.AttributeSet;
import android.util.StateSet;
import android.util.Xml;
import java.io.IOException;
import java.util.Objects;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import th.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    final int f49478a;

    /* renamed from: b  reason: collision with root package name */
    final l f49479b;

    /* renamed from: c  reason: collision with root package name */
    final int[][] f49480c;

    /* renamed from: d  reason: collision with root package name */
    final l[] f49481d;

    /* renamed from: e  reason: collision with root package name */
    final p f49482e;

    /* renamed from: f  reason: collision with root package name */
    final p f49483f;

    /* renamed from: g  reason: collision with root package name */
    final p f49484g;

    /* renamed from: h  reason: collision with root package name */
    final p f49485h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f49486a;

        /* renamed from: b  reason: collision with root package name */
        private l f49487b;

        /* renamed from: c  reason: collision with root package name */
        private int[][] f49488c;

        /* renamed from: d  reason: collision with root package name */
        private l[] f49489d;

        /* renamed from: e  reason: collision with root package name */
        private p f49490e;

        /* renamed from: f  reason: collision with root package name */
        private p f49491f;

        /* renamed from: g  reason: collision with root package name */
        private p f49492g;

        /* renamed from: h  reason: collision with root package name */
        private p f49493h;

        private boolean k(int i10, int i11) {
            if ((i11 | i10) == i10) {
                return true;
            }
            return false;
        }

        private void l(int i10, int i11) {
            int[][] iArr = new int[i11];
            System.arraycopy(this.f49488c, 0, iArr, 0, i10);
            this.f49488c = iArr;
            l[] lVarArr = new l[i11];
            System.arraycopy(this.f49489d, 0, lVarArr, 0, i10);
            this.f49489d = lVarArr;
        }

        private void m() {
            this.f49487b = new l();
            this.f49488c = new int[10];
            this.f49489d = new l[10];
        }

        public b i(int[] iArr, l lVar) {
            int i10 = this.f49486a;
            if (i10 == 0 || iArr.length == 0) {
                this.f49487b = lVar;
            }
            if (i10 >= this.f49488c.length) {
                l(i10, i10 + 10);
            }
            int[][] iArr2 = this.f49488c;
            int i11 = this.f49486a;
            iArr2[i11] = iArr;
            this.f49489d[i11] = lVar;
            this.f49486a = i11 + 1;
            return this;
        }

        public q j() {
            if (this.f49486a == 0) {
                return null;
            }
            return new q(this);
        }

        public b n(p pVar, int i10) {
            if (k(i10, 1)) {
                this.f49490e = pVar;
            }
            if (k(i10, 2)) {
                this.f49491f = pVar;
            }
            if (k(i10, 4)) {
                this.f49492g = pVar;
            }
            if (k(i10, 8)) {
                this.f49493h = pVar;
            }
            return this;
        }

        public b(q qVar) {
            int i10 = qVar.f49478a;
            this.f49486a = i10;
            this.f49487b = qVar.f49479b;
            int[][] iArr = qVar.f49480c;
            int[][] iArr2 = new int[iArr.length];
            this.f49488c = iArr2;
            this.f49489d = new l[qVar.f49481d.length];
            System.arraycopy(iArr, 0, iArr2, 0, i10);
            System.arraycopy(qVar.f49481d, 0, this.f49489d, 0, this.f49486a);
            this.f49490e = qVar.f49482e;
            this.f49491f = qVar.f49483f;
            this.f49492g = qVar.f49484g;
            this.f49493h = qVar.f49485h;
        }

        public b(l lVar) {
            m();
            i(StateSet.WILD_CARD, lVar);
        }

        private b(Context context, int i10) {
            int next;
            m();
            try {
                XmlResourceParser xml = context.getResources().getXml(i10);
                AttributeSet asAttributeSet = Xml.asAttributeSet(xml);
                while (true) {
                    next = xml.next();
                    if (next == 2 || next == 1) {
                        break;
                    }
                }
                if (next == 2) {
                    if (xml.getName().equals("selector")) {
                        q.g(this, context, xml, asAttributeSet, context.getTheme());
                    }
                    xml.close();
                    return;
                }
                throw new XmlPullParserException("No start tag found");
            } catch (Resources.NotFoundException | IOException | XmlPullParserException unused) {
                m();
            }
        }
    }

    public static q b(Context context, TypedArray typedArray, int i10) {
        int resourceId = typedArray.getResourceId(i10, 0);
        if (resourceId == 0 || !Objects.equals(context.getResources().getResourceTypeName(resourceId), "xml")) {
            return null;
        }
        return new b(context, resourceId).j();
    }

    private int e(int[] iArr) {
        int[][] iArr2 = this.f49480c;
        for (int i10 = 0; i10 < this.f49478a; i10++) {
            if (StateSet.stateSetMatches(iArr2[i10], iArr)) {
                return i10;
            }
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void g(b bVar, Context context, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        TypedArray obtainStyledAttributes;
        int depth = xmlPullParser.getDepth() + 1;
        while (true) {
            int next = xmlPullParser.next();
            if (next != 1) {
                int depth2 = xmlPullParser.getDepth();
                if (depth2 >= depth || next != 3) {
                    if (next == 2 && depth2 <= depth && xmlPullParser.getName().equals("item")) {
                        Resources resources = context.getResources();
                        if (theme == null) {
                            obtainStyledAttributes = resources.obtainAttributes(attributeSet, bh.l.f7134s4);
                        } else {
                            obtainStyledAttributes = theme.obtainStyledAttributes(attributeSet, bh.l.f7134s4, 0, 0);
                        }
                        l m10 = l.b(context, obtainStyledAttributes.getResourceId(bh.l.f7143t4, 0), obtainStyledAttributes.getResourceId(bh.l.f7152u4, 0)).m();
                        obtainStyledAttributes.recycle();
                        int attributeCount = attributeSet.getAttributeCount();
                        int[] iArr = new int[attributeCount];
                        int i10 = 0;
                        for (int i11 = 0; i11 < attributeCount; i11++) {
                            int attributeNameResource = attributeSet.getAttributeNameResource(i11);
                            if (attributeNameResource != bh.b.Z && attributeNameResource != bh.b.f6724a0) {
                                int i12 = i10 + 1;
                                if (!attributeSet.getAttributeBooleanValue(i11, false)) {
                                    attributeNameResource = -attributeNameResource;
                                }
                                iArr[i10] = attributeNameResource;
                                i10 = i12;
                            }
                        }
                        bVar.i(StateSet.trimStateSet(iArr, i10), m10);
                    }
                } else {
                    return;
                }
            } else {
                return;
            }
        }
    }

    public static int h(int i10) {
        int i11 = i10 & 5;
        return ((i10 & 10) >> 1) | (i11 << 1);
    }

    public l c(boolean z10) {
        if (z10 && (this.f49482e != null || this.f49483f != null || this.f49484g != null || this.f49485h != null)) {
            l.b w10 = this.f49479b.w();
            p pVar = this.f49482e;
            if (pVar != null) {
                w10.E(pVar.e());
            }
            p pVar2 = this.f49483f;
            if (pVar2 != null) {
                w10.J(pVar2.e());
            }
            p pVar3 = this.f49484g;
            if (pVar3 != null) {
                w10.v(pVar3.e());
            }
            p pVar4 = this.f49485h;
            if (pVar4 != null) {
                w10.z(pVar4.e());
            }
            return w10.m();
        }
        return this.f49479b;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public l d(int[] iArr) {
        int e10 = e(iArr);
        if (e10 < 0) {
            e10 = e(StateSet.WILD_CARD);
        }
        if (this.f49482e == null && this.f49483f == null && this.f49484g == null && this.f49485h == null) {
            return this.f49481d[e10];
        }
        l.b w10 = this.f49481d[e10].w();
        p pVar = this.f49482e;
        if (pVar != null) {
            w10.E(pVar.d(iArr));
        }
        p pVar2 = this.f49483f;
        if (pVar2 != null) {
            w10.J(pVar2.d(iArr));
        }
        p pVar3 = this.f49484g;
        if (pVar3 != null) {
            w10.v(pVar3.d(iArr));
        }
        p pVar4 = this.f49485h;
        if (pVar4 != null) {
            w10.z(pVar4.d(iArr));
        }
        return w10.m();
    }

    public boolean f() {
        p pVar;
        p pVar2;
        p pVar3;
        p pVar4;
        if (this.f49478a > 1 || (((pVar = this.f49482e) != null && pVar.h()) || (((pVar2 = this.f49483f) != null && pVar2.h()) || (((pVar3 = this.f49484g) != null && pVar3.h()) || ((pVar4 = this.f49485h) != null && pVar4.h()))))) {
            return true;
        }
        return false;
    }

    public b i() {
        return new b(this);
    }

    private q(b bVar) {
        this.f49478a = bVar.f49486a;
        this.f49479b = bVar.f49487b;
        this.f49480c = bVar.f49488c;
        this.f49481d = bVar.f49489d;
        this.f49482e = bVar.f49490e;
        this.f49483f = bVar.f49491f;
        this.f49484g = bVar.f49492g;
        this.f49485h = bVar.f49493h;
    }
}
