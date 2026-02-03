package zj;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import pg.bl;
import pg.qk;
import pg.tk;
import pg.uj;
import pg.vk;
import pg.w0;
import pg.xk;
import zj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final List f55864a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55865b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends d {

        /* renamed from: e  reason: collision with root package name */
        private final float f55872e;

        /* renamed from: f  reason: collision with root package name */
        private final float f55873f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(bl blVar, Matrix matrix) {
            super(blVar.e(), blVar.d(), blVar.f(), "", matrix);
            this.f55872e = blVar.c();
            this.f55873f = blVar.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f55874a;

        /* renamed from: b  reason: collision with root package name */
        private final Rect f55875b;

        /* renamed from: c  reason: collision with root package name */
        private final Point[] f55876c;

        /* renamed from: d  reason: collision with root package name */
        private final String f55877d;

        d(String str, Rect rect, List list, String str2, Matrix matrix) {
            this.f55874a = str;
            Rect rect2 = new Rect(rect);
            if (matrix != null) {
                wj.b.e(rect2, matrix);
            }
            this.f55875b = rect2;
            Point[] pointArr = new Point[list.size()];
            for (int i10 = 0; i10 < list.size(); i10++) {
                pointArr[i10] = new Point((Point) list.get(i10));
            }
            if (matrix != null) {
                wj.b.b(pointArr, matrix);
            }
            this.f55876c = pointArr;
            this.f55877d = str2;
        }

        public String a() {
            return this.f55877d;
        }

        protected final String b() {
            String str = this.f55874a;
            if (str == null) {
                return "";
            }
            return str;
        }
    }

    public a(xk xkVar, final Matrix matrix) {
        ArrayList arrayList = new ArrayList();
        this.f55864a = arrayList;
        this.f55865b = xkVar.b();
        arrayList.addAll(w0.a(xkVar.c(), new uj() { // from class: zj.e
            @Override // pg.uj
            public final Object a(Object obj) {
                return new a.e((qk) obj, matrix);
            }
        }));
    }

    public String a() {
        return this.f55865b;
    }

    public List b() {
        return Collections.unmodifiableList(this.f55864a);
    }

    public a(String str, List list) {
        ArrayList arrayList = new ArrayList();
        this.f55864a = arrayList;
        arrayList.addAll(list);
        this.f55865b = str;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f55869e;

        /* renamed from: f  reason: collision with root package name */
        private final float f55870f;

        /* renamed from: g  reason: collision with root package name */
        private final float f55871g;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(vk vkVar, final Matrix matrix, float f10, float f11) {
            super(vkVar.f(), vkVar.d(), vkVar.g(), vkVar.e(), matrix);
            this.f55869e = w0.a(vkVar.i(), new uj() { // from class: zj.g
                @Override // pg.uj
                public final Object a(Object obj) {
                    return new a.C0791a((tk) obj, matrix);
                }
            });
            this.f55870f = f10;
            this.f55871g = f11;
        }

        public String c() {
            return b();
        }

        public b(String str, Rect rect, List list, String str2, Matrix matrix, List list2, float f10, float f11) {
            super(str, rect, list, str2, matrix);
            this.f55869e = list2;
            this.f55870f = f10;
            this.f55871g = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f55878e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(qk qkVar, final Matrix matrix) {
            super(qkVar.d(), qkVar.b(), qkVar.e(), qkVar.c(), matrix);
            this.f55878e = w0.a(qkVar.f(), new uj() { // from class: zj.h
                @Override // pg.uj
                public final Object a(Object obj) {
                    vk vkVar = (vk) obj;
                    return new a.b(vkVar, matrix, vkVar.c(), vkVar.b());
                }
            });
        }

        public synchronized List c() {
            return this.f55878e;
        }

        public String d() {
            return b();
        }

        public e(String str, Rect rect, List list, String str2, Matrix matrix, List list2) {
            super(str, rect, list, str2, matrix);
            this.f55878e = list2;
        }
    }

    /* renamed from: zj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0791a extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f55866e;

        /* renamed from: f  reason: collision with root package name */
        private final float f55867f;

        /* renamed from: g  reason: collision with root package name */
        private final float f55868g;

        /* JADX INFO: Access modifiers changed from: package-private */
        public C0791a(tk tkVar, final Matrix matrix) {
            super(tkVar.f(), tkVar.d(), tkVar.g(), tkVar.e(), matrix);
            this.f55867f = tkVar.c();
            this.f55868g = tkVar.b();
            List i10 = tkVar.i();
            this.f55866e = w0.a(i10 == null ? new ArrayList() : i10, new uj() { // from class: zj.f
                @Override // pg.uj
                public final Object a(Object obj) {
                    return new a.c((bl) obj, matrix);
                }
            });
        }

        public C0791a(String str, Rect rect, List list, String str2, Matrix matrix, float f10, float f11, List list2) {
            super(str, rect, list, str2, matrix);
            this.f55867f = f10;
            this.f55868g = f11;
            this.f55866e = list2;
        }
    }
}
