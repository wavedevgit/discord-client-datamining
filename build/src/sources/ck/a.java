package ck;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import ck.a;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final List f7658a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7659b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends d {

        /* renamed from: e  reason: collision with root package name */
        private final float f7666e;

        /* renamed from: f  reason: collision with root package name */
        private final float f7667f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(bl blVar, Matrix matrix) {
            super(blVar.e(), blVar.d(), blVar.f(), "", matrix);
            this.f7666e = blVar.c();
            this.f7667f = blVar.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f7668a;

        /* renamed from: b  reason: collision with root package name */
        private final Rect f7669b;

        /* renamed from: c  reason: collision with root package name */
        private final Point[] f7670c;

        /* renamed from: d  reason: collision with root package name */
        private final String f7671d;

        d(String str, Rect rect, List list, String str2, Matrix matrix) {
            this.f7668a = str;
            Rect rect2 = new Rect(rect);
            if (matrix != null) {
                zj.b.e(rect2, matrix);
            }
            this.f7669b = rect2;
            Point[] pointArr = new Point[list.size()];
            for (int i10 = 0; i10 < list.size(); i10++) {
                pointArr[i10] = new Point((Point) list.get(i10));
            }
            if (matrix != null) {
                zj.b.b(pointArr, matrix);
            }
            this.f7670c = pointArr;
            this.f7671d = str2;
        }

        public String a() {
            return this.f7671d;
        }

        protected final String b() {
            String str = this.f7668a;
            if (str == null) {
                return "";
            }
            return str;
        }
    }

    public a(xk xkVar, final Matrix matrix) {
        ArrayList arrayList = new ArrayList();
        this.f7658a = arrayList;
        this.f7659b = xkVar.b();
        arrayList.addAll(w0.a(xkVar.c(), new uj() { // from class: ck.e
            @Override // pg.uj
            public final Object a(Object obj) {
                return new a.e((qk) obj, matrix);
            }
        }));
    }

    public String a() {
        return this.f7659b;
    }

    public List b() {
        return Collections.unmodifiableList(this.f7658a);
    }

    public a(String str, List list) {
        ArrayList arrayList = new ArrayList();
        this.f7658a = arrayList;
        arrayList.addAll(list);
        this.f7659b = str;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f7663e;

        /* renamed from: f  reason: collision with root package name */
        private final float f7664f;

        /* renamed from: g  reason: collision with root package name */
        private final float f7665g;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(vk vkVar, final Matrix matrix, float f10, float f11) {
            super(vkVar.f(), vkVar.d(), vkVar.g(), vkVar.e(), matrix);
            this.f7663e = w0.a(vkVar.i(), new uj() { // from class: ck.g
                @Override // pg.uj
                public final Object a(Object obj) {
                    return new a.C0139a((tk) obj, matrix);
                }
            });
            this.f7664f = f10;
            this.f7665g = f11;
        }

        public String c() {
            return b();
        }

        public b(String str, Rect rect, List list, String str2, Matrix matrix, List list2, float f10, float f11) {
            super(str, rect, list, str2, matrix);
            this.f7663e = list2;
            this.f7664f = f10;
            this.f7665g = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f7672e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(qk qkVar, final Matrix matrix) {
            super(qkVar.d(), qkVar.b(), qkVar.e(), qkVar.c(), matrix);
            this.f7672e = w0.a(qkVar.f(), new uj() { // from class: ck.h
                @Override // pg.uj
                public final Object a(Object obj) {
                    vk vkVar = (vk) obj;
                    return new a.b(vkVar, matrix, vkVar.c(), vkVar.b());
                }
            });
        }

        public synchronized List c() {
            return this.f7672e;
        }

        public String d() {
            return b();
        }

        public e(String str, Rect rect, List list, String str2, Matrix matrix, List list2) {
            super(str, rect, list, str2, matrix);
            this.f7672e = list2;
        }
    }

    /* renamed from: ck.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0139a extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f7660e;

        /* renamed from: f  reason: collision with root package name */
        private final float f7661f;

        /* renamed from: g  reason: collision with root package name */
        private final float f7662g;

        /* JADX INFO: Access modifiers changed from: package-private */
        public C0139a(tk tkVar, final Matrix matrix) {
            super(tkVar.f(), tkVar.d(), tkVar.g(), tkVar.e(), matrix);
            this.f7661f = tkVar.c();
            this.f7662g = tkVar.b();
            List i10 = tkVar.i();
            this.f7660e = w0.a(i10 == null ? new ArrayList() : i10, new uj() { // from class: ck.f
                @Override // pg.uj
                public final Object a(Object obj) {
                    return new a.c((bl) obj, matrix);
                }
            });
        }

        public C0139a(String str, Rect rect, List list, String str2, Matrix matrix, float f10, float f11, List list2) {
            super(str, rect, list, str2, matrix);
            this.f7661f = f10;
            this.f7662g = f11;
            this.f7660e = list2;
        }
    }
}
