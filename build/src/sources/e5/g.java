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
    public static final a f22634c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final LinkedHashMap f22635a = new LinkedHashMap();

    /* renamed from: b  reason: collision with root package name */
    private int f22636b;

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
        private final int f22637a;

        /* renamed from: b  reason: collision with root package name */
        private final WeakReference f22638b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f22639c;

        /* renamed from: d  reason: collision with root package name */
        private final int f22640d;

        public b(int i10, WeakReference weakReference, Map map, int i11) {
            this.f22637a = i10;
            this.f22638b = weakReference;
            this.f22639c = map;
            this.f22640d = i11;
        }

        public final WeakReference a() {
            return this.f22638b;
        }

        public final Map b() {
            return this.f22639c;
        }

        public final int c() {
            return this.f22637a;
        }

        public final int d() {
            return this.f22640d;
        }
    }

    private final void f() {
        int i10 = this.f22636b;
        this.f22636b = i10 + 1;
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
    public synchronized c.C0288c b(c.b bVar) {
        c.C0288c c0288c;
        try {
            ArrayList arrayList = (ArrayList) this.f22635a.get(bVar);
            c.C0288c c0288c2 = null;
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
                    c0288c = new c.C0288c(bitmap, bVar2.b());
                } else {
                    c0288c = null;
                }
                if (c0288c != null) {
                    c0288c2 = c0288c;
                    break;
                }
                i10++;
            }
            f();
            return c0288c2;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // e5.i
    public synchronized void c() {
        this.f22636b = 0;
        this.f22635a.clear();
    }

    @Override // e5.i
    public synchronized void d(c.b bVar, Bitmap bitmap, Map map, int i10) {
        try {
            LinkedHashMap linkedHashMap = this.f22635a;
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
        this.f22636b = 0;
        Iterator it = this.f22635a.values().iterator();
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
