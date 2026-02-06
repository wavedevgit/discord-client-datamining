package q1;

import android.content.res.Resources;
import android.content.res.TypedArray;
import android.util.Base64;
import android.util.Xml;
import com.facebook.react.views.text.ReactFontManager;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static int a(TypedArray typedArray, int i10) {
            return typedArray.getType(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements b {

        /* renamed from: a  reason: collision with root package name */
        private final d[] f46349a;

        public c(d[] dVarArr) {
            this.f46349a = dVarArr;
        }

        public d[] a() {
            return this.f46349a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f46350a;

        /* renamed from: b  reason: collision with root package name */
        private final int f46351b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f46352c;

        /* renamed from: d  reason: collision with root package name */
        private final String f46353d;

        /* renamed from: e  reason: collision with root package name */
        private final int f46354e;

        /* renamed from: f  reason: collision with root package name */
        private final int f46355f;

        public d(String str, int i10, boolean z10, String str2, int i11, int i12) {
            this.f46350a = str;
            this.f46351b = i10;
            this.f46352c = z10;
            this.f46353d = str2;
            this.f46354e = i11;
            this.f46355f = i12;
        }

        public String a() {
            return this.f46350a;
        }

        public int b() {
            return this.f46355f;
        }

        public int c() {
            return this.f46354e;
        }

        public String d() {
            return this.f46353d;
        }

        public int e() {
            return this.f46351b;
        }

        public boolean f() {
            return this.f46352c;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e implements b {

        /* renamed from: a  reason: collision with root package name */
        private final List f46356a;

        /* renamed from: b  reason: collision with root package name */
        private final int f46357b;

        /* renamed from: c  reason: collision with root package name */
        private final int f46358c;

        /* renamed from: d  reason: collision with root package name */
        private final String f46359d;

        public e(List list, int i10, int i11, String str) {
            this.f46356a = list;
            this.f46358c = i10;
            this.f46357b = i11;
            this.f46359d = str;
        }

        public int a() {
            return this.f46358c;
        }

        public List b() {
            return this.f46356a;
        }

        public String c() {
            return this.f46359d;
        }

        public int d() {
            return this.f46357b;
        }
    }

    private static int a(TypedArray typedArray, int i10) {
        return a.a(typedArray, i10);
    }

    public static b b(XmlPullParser xmlPullParser, Resources resources) {
        int next;
        do {
            next = xmlPullParser.next();
            if (next == 2) {
                break;
            }
        } while (next != 1);
        if (next == 2) {
            return e(xmlPullParser, resources);
        }
        throw new XmlPullParserException("No start tag found");
    }

    public static List c(Resources resources, int i10) {
        if (i10 == 0) {
            return Collections.EMPTY_LIST;
        }
        TypedArray obtainTypedArray = resources.obtainTypedArray(i10);
        try {
            if (obtainTypedArray.length() == 0) {
                return Collections.EMPTY_LIST;
            }
            ArrayList arrayList = new ArrayList();
            if (a(obtainTypedArray, 0) == 1) {
                for (int i11 = 0; i11 < obtainTypedArray.length(); i11++) {
                    int resourceId = obtainTypedArray.getResourceId(i11, 0);
                    if (resourceId != 0) {
                        arrayList.add(i(resources.getStringArray(resourceId)));
                    }
                }
            } else {
                arrayList.add(i(resources.getStringArray(i10)));
            }
            return arrayList;
        } finally {
            obtainTypedArray.recycle();
        }
    }

    private static z1.e d(XmlPullParser xmlPullParser, Resources resources, String str, String str2, List list) {
        TypedArray obtainAttributes = resources.obtainAttributes(Xml.asAttributeSet(xmlPullParser), o1.g.B);
        try {
            String string = obtainAttributes.getString(o1.g.C);
            String string2 = obtainAttributes.getString(o1.g.D);
            String string3 = obtainAttributes.getString(o1.g.E);
            if (string != null) {
                while (xmlPullParser.next() != 3) {
                    h(xmlPullParser);
                }
                z1.e eVar = new z1.e(str, str2, string, list, string2, string3);
                q1.e.a(obtainAttributes);
                return eVar;
            }
            throw new XmlPullParserException("query attribute must be set in fallback element");
        } catch (Throwable th2) {
            if (obtainAttributes != null) {
                try {
                    q1.e.a(obtainAttributes);
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    private static b e(XmlPullParser xmlPullParser, Resources resources) {
        xmlPullParser.require(2, null, "font-family");
        if (xmlPullParser.getName().equals("font-family")) {
            return f(xmlPullParser, resources);
        }
        h(xmlPullParser);
        return null;
    }

    private static b f(XmlPullParser xmlPullParser, Resources resources) {
        TypedArray obtainAttributes = resources.obtainAttributes(Xml.asAttributeSet(xmlPullParser), o1.g.f41365h);
        String string = obtainAttributes.getString(o1.g.f41366i);
        String string2 = obtainAttributes.getString(o1.g.f41371n);
        String string3 = obtainAttributes.getString(o1.g.f41372o);
        String string4 = obtainAttributes.getString(o1.g.f41368k);
        int resourceId = obtainAttributes.getResourceId(o1.g.f41367j, 0);
        int integer = obtainAttributes.getInteger(o1.g.f41369l, 1);
        int integer2 = obtainAttributes.getInteger(o1.g.f41370m, 500);
        String string5 = obtainAttributes.getString(o1.g.f41373p);
        obtainAttributes.recycle();
        if (string != null && string2 != null) {
            List c10 = c(resources, resourceId);
            ArrayList arrayList = new ArrayList();
            while (xmlPullParser.next() != 3) {
                if (xmlPullParser.getEventType() == 2) {
                    if (xmlPullParser.getName().equals("fallback")) {
                        arrayList.add(d(xmlPullParser, resources, string, string2, c10));
                    } else {
                        h(xmlPullParser);
                    }
                }
            }
            if (!arrayList.isEmpty()) {
                return new e(arrayList, integer, integer2, string5);
            }
            if (string3 != null) {
                arrayList.add(new z1.e(string, string2, string3, c10, null, null));
                if (string4 != null) {
                    arrayList.add(new z1.e(string, string2, string4, c10, null, null));
                }
                return new e(arrayList, integer, integer2, string5);
            }
            throw new IllegalArgumentException("The provider font XML requires query attribute or fallback children.");
        }
        ArrayList arrayList2 = new ArrayList();
        while (xmlPullParser.next() != 3) {
            if (xmlPullParser.getEventType() == 2) {
                if (xmlPullParser.getName().equals("font")) {
                    arrayList2.add(g(xmlPullParser, resources));
                } else {
                    h(xmlPullParser);
                }
            }
        }
        if (arrayList2.isEmpty()) {
            return null;
        }
        return new c((d[]) arrayList2.toArray(new d[0]));
    }

    private static d g(XmlPullParser xmlPullParser, Resources resources) {
        int i10;
        int i11;
        boolean z10;
        int i12;
        int i13;
        int i14;
        TypedArray obtainAttributes = resources.obtainAttributes(Xml.asAttributeSet(xmlPullParser), o1.g.f41374q);
        if (obtainAttributes.hasValue(o1.g.f41383z)) {
            i10 = o1.g.f41383z;
        } else {
            i10 = o1.g.f41376s;
        }
        int i15 = obtainAttributes.getInt(i10, ReactFontManager.TypefaceStyle.NORMAL);
        if (obtainAttributes.hasValue(o1.g.f41381x)) {
            i11 = o1.g.f41381x;
        } else {
            i11 = o1.g.f41377t;
        }
        if (1 == obtainAttributes.getInt(i11, 0)) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (obtainAttributes.hasValue(o1.g.A)) {
            i12 = o1.g.A;
        } else {
            i12 = o1.g.f41378u;
        }
        if (obtainAttributes.hasValue(o1.g.f41382y)) {
            i13 = o1.g.f41382y;
        } else {
            i13 = o1.g.f41379v;
        }
        String string = obtainAttributes.getString(i13);
        int i16 = obtainAttributes.getInt(i12, 0);
        if (obtainAttributes.hasValue(o1.g.f41380w)) {
            i14 = o1.g.f41380w;
        } else {
            i14 = o1.g.f41375r;
        }
        int resourceId = obtainAttributes.getResourceId(i14, 0);
        String string2 = obtainAttributes.getString(i14);
        obtainAttributes.recycle();
        while (xmlPullParser.next() != 3) {
            h(xmlPullParser);
        }
        return new d(string2, i15, z10, string, i16, resourceId);
    }

    private static void h(XmlPullParser xmlPullParser) {
        int i10 = 1;
        while (i10 > 0) {
            int next = xmlPullParser.next();
            if (next != 2) {
                if (next == 3) {
                    i10--;
                }
            } else {
                i10++;
            }
        }
    }

    private static List i(String[] strArr) {
        ArrayList arrayList = new ArrayList();
        for (String str : strArr) {
            arrayList.add(Base64.decode(str, 0));
        }
        return arrayList;
    }
}
