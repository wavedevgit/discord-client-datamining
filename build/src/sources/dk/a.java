package dk;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import dk.a;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import qg.bl;
import qg.qk;
import qg.tk;
import qg.uj;
import qg.vk;
import qg.w0;
import qg.xk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final List f20805a;

    /* renamed from: b  reason: collision with root package name */
    private final String f20806b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends d {

        /* renamed from: e  reason: collision with root package name */
        private final float f20813e;

        /* renamed from: f  reason: collision with root package name */
        private final float f20814f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(bl blVar, Matrix matrix) {
            super(blVar.e(), blVar.d(), blVar.f(), "", matrix);
            this.f20813e = blVar.c();
            this.f20814f = blVar.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f20815a;

        /* renamed from: b  reason: collision with root package name */
        private final Rect f20816b;

        /* renamed from: c  reason: collision with root package name */
        private final Point[] f20817c;

        /* renamed from: d  reason: collision with root package name */
        private final String f20818d;

        d(String str, Rect rect, List list, String str2, Matrix matrix) {
            this.f20815a = str;
            Rect rect2 = new Rect(rect);
            if (matrix != null) {
                ak.b.e(rect2, matrix);
            }
            this.f20816b = rect2;
            Point[] pointArr = new Point[list.size()];
            for (int i10 = 0; i10 < list.size(); i10++) {
                pointArr[i10] = new Point((Point) list.get(i10));
            }
            if (matrix != null) {
                ak.b.b(pointArr, matrix);
            }
            this.f20817c = pointArr;
            this.f20818d = str2;
        }

        public String a() {
            return this.f20818d;
        }

        protected final String b() {
            String str = this.f20815a;
            if (str == null) {
                return "";
            }
            return str;
        }
    }

    public a(xk xkVar, final Matrix matrix) {
        ArrayList arrayList = new ArrayList();
        this.f20805a = arrayList;
        this.f20806b = xkVar.b();
        arrayList.addAll(w0.a(xkVar.c(), new uj() { // from class: dk.e
            @Override // qg.uj
            public final Object a(Object obj) {
                return new a.e((qk) obj, matrix);
            }
        }));
    }

    public String a() {
        return this.f20806b;
    }

    public List b() {
        return Collections.unmodifiableList(this.f20805a);
    }

    public a(String str, List list) {
        ArrayList arrayList = new ArrayList();
        this.f20805a = arrayList;
        arrayList.addAll(list);
        this.f20806b = str;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f20810e;

        /* renamed from: f  reason: collision with root package name */
        private final float f20811f;

        /* renamed from: g  reason: collision with root package name */
        private final float f20812g;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(vk vkVar, final Matrix matrix, float f10, float f11) {
            super(vkVar.f(), vkVar.d(), vkVar.h(), vkVar.e(), matrix);
            this.f20810e = w0.a(vkVar.i(), new uj() { // from class: dk.g
                @Override // qg.uj
                public final Object a(Object obj) {
                    return new a.C0268a((tk) obj, matrix);
                }
            });
            this.f20811f = f10;
            this.f20812g = f11;
        }

        public String c() {
            return b();
        }

        public b(String str, Rect rect, List list, String str2, Matrix matrix, List list2, float f10, float f11) {
            super(str, rect, list, str2, matrix);
            this.f20810e = list2;
            this.f20811f = f10;
            this.f20812g = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f20819e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(qk qkVar, final Matrix matrix) {
            super(qkVar.d(), qkVar.b(), qkVar.e(), qkVar.c(), matrix);
            this.f20819e = w0.a(qkVar.f(), new uj() { // from class: dk.h
                @Override // qg.uj
                public final Object a(Object obj) {
                    vk vkVar = (vk) obj;
                    return new a.b(vkVar, matrix, vkVar.c(), vkVar.b());
                }
            });
        }

        public synchronized List c() {
            return this.f20819e;
        }

        public String d() {
            return b();
        }

        public e(String str, Rect rect, List list, String str2, Matrix matrix, List list2) {
            super(str, rect, list, str2, matrix);
            this.f20819e = list2;
        }
    }

    /* renamed from: dk.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0268a extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f20807e;

        /* renamed from: f  reason: collision with root package name */
        private final float f20808f;

        /* renamed from: g  reason: collision with root package name */
        private final float f20809g;

        /* JADX INFO: Access modifiers changed from: package-private */
        public C0268a(tk tkVar, final Matrix matrix) {
            super(tkVar.f(), tkVar.d(), tkVar.h(), tkVar.e(), matrix);
            this.f20808f = tkVar.c();
            this.f20809g = tkVar.b();
            List i10 = tkVar.i();
            this.f20807e = w0.a(i10 == null ? new ArrayList() : i10, new uj() { // from class: dk.f
                @Override // qg.uj
                public final Object a(Object obj) {
                    return new a.c((bl) obj, matrix);
                }
            });
        }

        public C0268a(String str, Rect rect, List list, String str2, Matrix matrix, float f10, float f11, List list2) {
            super(str, rect, list, str2, matrix);
            this.f20808f = f10;
            this.f20809g = f11;
            this.f20807e = list2;
        }
    }
}
