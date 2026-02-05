package e5;

import android.graphics.Bitmap;
import e5.c;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g implements i {

    /* renamed from: c  reason: collision with root package name */
    public static final a f21429c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final LinkedHashMap f21430a = new LinkedHashMap();

    /* renamed from: b  reason: collision with root package name */
    private int f21431b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f21432a;

        /* renamed from: b  reason: collision with root package name */
        private final WeakReference f21433b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f21434c;

        /* renamed from: d  reason: collision with root package name */
        private final int f21435d;

        public b(int i10, WeakReference weakReference, Map map, int i11) {
            this.f21432a = i10;
            this.f21433b = weakReference;
            this.f21434c = map;
            this.f21435d = i11;
        }

        public final WeakReference a() {
            return this.f21433b;
        }

        public final Map b() {
            return this.f21434c;
        }

        public final int c() {
            return this.f21432a;
        }

        public final int d() {
            return this.f21435d;
        }
    }

    private final void f() {
        int i10 = this.f21431b;
        this.f21431b = i10 + 1;
        if (i10 >= 10) {
            e();
        }
    }

    @Override // e5.i
    public synchronized void a(int i10) {
        if (i10 >= 10 && i10 != 20) {
            e();
        }
    }

    @Override // e5.i
    public synchronized c.C0292c b(c.b bVar) {
        c.C0292c c0292c;
        try {
            ArrayList arrayList = (ArrayList) this.f21430a.get(bVar);
            c.C0292c c0292c2 = null;
            if (arrayList == null) {
                return null;
            }
            int size = arrayList.size();
            int i10 = 0;
            while (true) {
                if (i10 >= size) {
                    break;
                }
                b bVar2 = (b) arrayList.get(i10);
                Bitmap bitmap = (Bitmap) bVar2.a().get();
                if (bitmap != null) {
                    c0292c = new c.C0292c(bitmap, bVar2.b());
                } else {
                    c0292c = null;
                }
                if (c0292c != null) {
                    c0292c2 = c0292c;
                    break;
                }
                i10++;
            }
            f();
            return c0292c2;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // e5.i
    public synchronized void c() {
        this.f21431b = 0;
        this.f21430a.clear();
    }

    @Override // e5.i
    public synchronized void d(c.b bVar, Bitmap bitmap, Map map, int i10) {
        try {
            LinkedHashMap linkedHashMap = this.f21430a;
            Object obj = linkedHashMap.get(bVar);
            if (obj == null) {
                obj = new ArrayList();
                linkedHashMap.put(bVar, obj);
            }
            ArrayList arrayList = (ArrayList) obj;
            int identityHashCode = System.identityHashCode(bitmap);
            b bVar2 = new b(identityHashCode, new WeakReference(bitmap), map, i10);
            int size = arrayList.size();
            int i11 = 0;
            while (true) {
                if (i11 < size) {
                    b bVar3 = (b) arrayList.get(i11);
                    if (i10 >= bVar3.d()) {
                        if (bVar3.c() == identityHashCode && bVar3.a().get() == bitmap) {
                            arrayList.set(i11, bVar2);
                        } else {
                            arrayList.add(i11, bVar2);
                        }
                    } else {
                        i11++;
                    }
                } else {
                    arrayList.add(bVar2);
                    break;
                }
            }
            f();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final void e() {
        Bitmap bitmap;
        WeakReference a10;
        this.f21431b = 0;
        Iterator it = this.f21430a.values().iterator();
        while (it.hasNext()) {
            ArrayList arrayList = (ArrayList) it.next();
            if (arrayList.size() <= 1) {
                b bVar = (b) CollectionsKt.firstOrNull(arrayList);
                if (bVar != null && (a10 = bVar.a()) != null) {
                    bitmap = (Bitmap) a10.get();
                } else {
                    bitmap = null;
                }
                if (bitmap == null) {
                    it.remove();
                }
            } else {
                int size = arrayList.size();
                int i10 = 0;
                for (int i11 = 0; i11 < size; i11++) {
                    int i12 = i11 - i10;
                    if (((b) arrayList.get(i12)).a().get() == null) {
                        arrayList.remove(i12);
                        i10++;
                    }
                }
                if (arrayList.isEmpty()) {
                    it.remove();
                }
            }
        }
    }
}
