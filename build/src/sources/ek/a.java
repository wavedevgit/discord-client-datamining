package ek;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import ek.a;
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
    private final List f21726a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21727b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends d {

        /* renamed from: e  reason: collision with root package name */
        private final float f21734e;

        /* renamed from: f  reason: collision with root package name */
        private final float f21735f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(bl blVar, Matrix matrix) {
            super(blVar.e(), blVar.d(), blVar.f(), "", matrix);
            this.f21734e = blVar.c();
            this.f21735f = blVar.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f21736a;

        /* renamed from: b  reason: collision with root package name */
        private final Rect f21737b;

        /* renamed from: c  reason: collision with root package name */
        private final Point[] f21738c;

        /* renamed from: d  reason: collision with root package name */
        private final String f21739d;

        d(String str, Rect rect, List list, String str2, Matrix matrix) {
            this.f21736a = str;
            Rect rect2 = new Rect(rect);
            if (matrix != null) {
                bk.b.e(rect2, matrix);
            }
            this.f21737b = rect2;
            Point[] pointArr = new Point[list.size()];
            for (int i10 = 0; i10 < list.size(); i10++) {
                pointArr[i10] = new Point((Point) list.get(i10));
            }
            if (matrix != null) {
                bk.b.b(pointArr, matrix);
            }
            this.f21738c = pointArr;
            this.f21739d = str2;
        }

        public String a() {
            return this.f21739d;
        }

        protected final String b() {
            String str = this.f21736a;
            if (str == null) {
                return "";
            }
            return str;
        }
    }

    public a(xk xkVar, final Matrix matrix) {
        ArrayList arrayList = new ArrayList();
        this.f21726a = arrayList;
        this.f21727b = xkVar.b();
        arrayList.addAll(w0.a(xkVar.c(), new uj() { // from class: ek.e
            @Override // rg.uj
            public final Object a(Object obj) {
                return new a.e((qk) obj, matrix);
            }
        }));
    }

    public String a() {
        return this.f21727b;
    }

    public List b() {
        return Collections.unmodifiableList(this.f21726a);
    }

    public a(String str, List list) {
        ArrayList arrayList = new ArrayList();
        this.f21726a = arrayList;
        arrayList.addAll(list);
        this.f21727b = str;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f21731e;

        /* renamed from: f  reason: collision with root package name */
        private final float f21732f;

        /* renamed from: g  reason: collision with root package name */
        private final float f21733g;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(vk vkVar, final Matrix matrix, float f10, float f11) {
            super(vkVar.f(), vkVar.d(), vkVar.h(), vkVar.e(), matrix);
            this.f21731e = w0.a(vkVar.i(), new uj() { // from class: ek.g
                @Override // rg.uj
                public final Object a(Object obj) {
                    return new a.C0316a((tk) obj, matrix);
                }
            });
            this.f21732f = f10;
            this.f21733g = f11;
        }

        public String c() {
            return b();
        }

        public b(String str, Rect rect, List list, String str2, Matrix matrix, List list2, float f10, float f11) {
            super(str, rect, list, str2, matrix);
            this.f21731e = list2;
            this.f21732f = f10;
            this.f21733g = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f21740e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(qk qkVar, final Matrix matrix) {
            super(qkVar.d(), qkVar.b(), qkVar.e(), qkVar.c(), matrix);
            this.f21740e = w0.a(qkVar.f(), new uj() { // from class: ek.h
                @Override // rg.uj
                public final Object a(Object obj) {
                    vk vkVar = (vk) obj;
                    return new a.b(vkVar, matrix, vkVar.c(), vkVar.b());
                }
            });
        }

        public synchronized List c() {
            return this.f21740e;
        }

        public String d() {
            return b();
        }

        public e(String str, Rect rect, List list, String str2, Matrix matrix, List list2) {
            super(str, rect, list, str2, matrix);
            this.f21740e = list2;
        }
    }

    /* renamed from: ek.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0316a extends d {

        /* renamed from: e  reason: collision with root package name */
        private final List f21728e;

        /* renamed from: f  reason: collision with root package name */
        private final float f21729f;

        /* renamed from: g  reason: collision with root package name */
        private final float f21730g;

        /* JADX INFO: Access modifiers changed from: package-private */
        public C0316a(tk tkVar, final Matrix matrix) {
            super(tkVar.f(), tkVar.d(), tkVar.h(), tkVar.e(), matrix);
            this.f21729f = tkVar.c();
            this.f21730g = tkVar.b();
            List i10 = tkVar.i();
            this.f21728e = w0.a(i10 == null ? new ArrayList() : i10, new uj() { // from class: ek.f
                @Override // rg.uj
                public final Object a(Object obj) {
                    return new a.c((bl) obj, matrix);
                }
            });
        }

        public C0316a(String str, Rect rect, List list, String str2, Matrix matrix, float f10, float f11, List list2) {
            super(str, rect, list, str2, matrix);
            this.f21729f = f10;
            this.f21730g = f11;
            this.f21728e = list2;
        }
    }
}
