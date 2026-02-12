package th;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.content.res.XmlResourceParser;
import android.util.AttributeSet;
import android.util.StateSet;
import android.util.Xml;
import java.io.IOException;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    int f48906a;

    /* renamed from: b  reason: collision with root package name */
    private d f48907b;

    /* renamed from: c  reason: collision with root package name */
    int[][] f48908c = new int[10];

    /* renamed from: d  reason: collision with root package name */
    d[] f48909d = new d[10];

    private void a(int[] iArr, d dVar) {
        int i10 = this.f48906a;
        if (i10 == 0 || iArr.length == 0) {
            this.f48907b = dVar;
        }
        if (i10 >= this.f48908c.length) {
            f(i10, i10 + 10);
        }
        int[][] iArr2 = this.f48908c;
        int i11 = this.f48906a;
        iArr2[i11] = iArr;
        this.f48909d[i11] = dVar;
        this.f48906a = i11 + 1;
    }

    public static p b(Context context, TypedArray typedArray, int i10, d dVar) {
        int next;
        int resourceId = typedArray.getResourceId(i10, 0);
        if (resourceId == 0) {
            return c(l.m(typedArray, i10, dVar));
        }
        if (!context.getResources().getResourceTypeName(resourceId).equals("xml")) {
            return c(l.m(typedArray, i10, dVar));
        }
        try {
            XmlResourceParser xml = context.getResources().getXml(resourceId);
            p pVar = new p();
            AttributeSet asAttributeSet = Xml.asAttributeSet(xml);
            while (true) {
                next = xml.next();
                if (next == 2 || next == 1) {
                    break;
                }
            }
            if (next == 2) {
                if (xml.getName().equals("selector")) {
                    pVar.i(context, xml, asAttributeSet, context.getTheme());
                }
                xml.close();
                return pVar;
            }
            throw new XmlPullParserException("No start tag found");
        } catch (Resources.NotFoundException | IOException | XmlPullParserException unused) {
            return c(dVar);
        }
    }

    public static p c(d dVar) {
        p pVar = new p();
        pVar.a(StateSet.WILD_CARD, dVar);
        return pVar;
    }

    private void f(int i10, int i11) {
        int[][] iArr = new int[i11];
        System.arraycopy(this.f48908c, 0, iArr, 0, i10);
        this.f48908c = iArr;
        d[] dVarArr = new d[i11];
        System.arraycopy(this.f48909d, 0, dVarArr, 0, i10);
        this.f48909d = dVarArr;
    }

    private int g(int[] iArr) {
        int[][] iArr2 = this.f48908c;
        for (int i10 = 0; i10 < this.f48906a; i10++) {
            if (StateSet.stateSetMatches(iArr2[i10], iArr)) {
                return i10;
            }
        }
        return -1;
    }

    private void i(Context context, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
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
                            obtainStyledAttributes = resources.obtainAttributes(attributeSet, bh.l.T5);
                        } else {
                            obtainStyledAttributes = theme.obtainStyledAttributes(attributeSet, bh.l.T5, 0, 0);
                        }
                        d m10 = l.m(obtainStyledAttributes, bh.l.Z5, new a(0.0f));
                        obtainStyledAttributes.recycle();
                        int attributeCount = attributeSet.getAttributeCount();
                        int[] iArr = new int[attributeCount];
                        int i10 = 0;
                        for (int i11 = 0; i11 < attributeCount; i11++) {
                            int attributeNameResource = attributeSet.getAttributeNameResource(i11);
                            if (attributeNameResource != bh.b.f6754q) {
                                int i12 = i10 + 1;
                                if (!attributeSet.getAttributeBooleanValue(i11, false)) {
                                    attributeNameResource = -attributeNameResource;
                                }
                                iArr[i10] = attributeNameResource;
                                i10 = i12;
                            }
                        }
                        a(StateSet.trimStateSet(iArr, i10), m10);
                    }
                } else {
                    return;
                }
            } else {
                return;
            }
        }
    }

    public d d(int[] iArr) {
        int g10 = g(iArr);
        if (g10 < 0) {
            g10 = g(StateSet.WILD_CARD);
        }
        if (g10 < 0) {
            return this.f48907b;
        }
        return this.f48909d[g10];
    }

    public d e() {
        return this.f48907b;
    }

    public boolean h() {
        if (this.f48906a > 1) {
            return true;
        }
        return false;
    }
}
