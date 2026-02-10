package gk;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import gk.a;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import rg.bl;
import rg.qk;
import rg.tk;
import rg.uj;
import rg.vk;
import rg.w0;
import rg.xk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final List f25740a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25741b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends d {

        /* renamed from: e  reason: collision with root package name */
        private final float f25748e;

        /* renamed from: f  reason: collision with root package name */
        private final float f25749f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(bl blVar, Matrix matrix) {
            super(blVar.e(), blVar.d(), blVar.f(), "", matrix);
            this.f25748e = blVar.c();
            this.f25749f = blVar.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f25750a;

        /* renamed from: b  reason: collision with root package name */
        private final Rect f25751b;

        /* renamed from: c  reason: collision with root package name */
        private final Point[] f25752c;

        /* renamed from: d  reason: collision with root package name */
        private final String f25753d;

        d(String str, Rect rect, List list, String str2, Matrix matrix) {
            this.f25750a = str;
            Rect rect2 = new Rect(rect);
            if (matrix != null) {
                dk.b.e(rect2, matrix);
            }
            this.f25751b = rect2;
            Point[] pointArr = new Point[list.size()];
            for (int i10 = 0; i10 < list.size(); i10++) {
                pointArr[i10] = new Point((Point) list.get(i10));
            }
            if (matrix != null) {
                dk.b.b(pointArr, matrix);
            }
            this.f25752c = pointArr;
            this.f25753d = str2;
        }

        public String a() {
            return this.f25753d;
        }

        protected final String b() {
            String str = this.f25750a;
            if (str == null) {
                return "";
            }
            return str;
        }
    }

    public a(xk xkVar, final Matrix matrix) {
        ArrayList arrayList = new ArrayList();
        this.f25740a = arrayList;
        this.f25741b = xkVar.b();
        arrayList.addAll(w0.a(xkVar.c(), new uj() { // from class: gk.e
            @Override // rg.uj
            public final Object a(Object obj) {
                return new a.e((qk) obj, matrix);
            }
        }));
    }

    public String a() {
        return this.f25741b;
    }

    public List b() {
        return Collections.unmodifiableList(this.f25740a);
    }

    public a(String str, List list) {
        ArrayList arrayList = new ArrayList();
        this.f25740a = arrayList;
        arrayList.addAll(list);
        this.f25741b = str;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f25745e;

        /* renamed from: f  reason: collision with root package name */
        private final float f25746f;

        /* renamed from: g  reason: collision with root package name */
        private final float f25747g;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(vk vkVar, final Matrix matrix, float f10, float f11) {
            super(vkVar.f(), vkVar.d(), vkVar.g(), vkVar.e(), matrix);
            this.f25745e = w0.a(vkVar.i(), new uj() { // from class: gk.g
                @Override // rg.uj
                public final Object a(Object obj) {
                    return new a.C0346a((tk) obj, matrix);
                }
            });
            this.f25746f = f10;
            this.f25747g = f11;
        }

        public String c() {
            return b();
        }

        public b(String str, Rect rect, List list, String str2, Matrix matrix, List list2, float f10, float f11) {
            super(str, rect, list, str2, matrix);
            this.f25745e = list2;
            this.f25746f = f10;
            this.f25747g = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f25754e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(qk qkVar, final Matrix matrix) {
            super(qkVar.d(), qkVar.b(), qkVar.e(), qkVar.c(), matrix);
            this.f25754e = w0.a(qkVar.f(), new uj() { // from class: gk.h
                @Override // rg.uj
                public final Object a(Object obj) {
                    vk vkVar = (vk) obj;
                    return new a.b(vkVar, matrix, vkVar.c(), vkVar.b());
                }
            });
        }

        public synchronized List c() {
            return this.f25754e;
        }

        public String d() {
            return b();
        }

        public e(String str, Rect rect, List list, String str2, Matrix matrix, List list2) {
            super(str, rect, list, str2, matrix);
            this.f25754e = list2;
        }
    }

    /* renamed from: gk.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0346a extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f25742e;

        /* renamed from: f  reason: collision with root package name */
        private final float f25743f;

        /* renamed from: g  reason: collision with root package name */
        private final float f25744g;

        /* JADX INFO: Access modifiers changed from: package-private */
        public C0346a(tk tkVar, final Matrix matrix) {
            super(tkVar.f(), tkVar.d(), tkVar.g(), tkVar.e(), matrix);
            this.f25743f = tkVar.c();
            this.f25744g = tkVar.b();
            List i10 = tkVar.i();
            this.f25742e = w0.a(i10 == null ? new ArrayList() : i10, new uj() { // from class: gk.f
                @Override // rg.uj
                public final Object a(Object obj) {
                    return new a.c((bl) obj, matrix);
                }
            });
        }

        public C0346a(String str, Rect rect, List list, String str2, Matrix matrix, float f10, float f11, List list2) {
            super(str, rect, list, str2, matrix);
            this.f25743f = f10;
            this.f25744g = f11;
            this.f25742e = list2;
        }
    }
}
