package androidx.datastore.preferences.protobuf;

import java.util.AbstractList;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c0 extends c implements d0, RandomAccess {

    /* renamed from: i  reason: collision with root package name */
    private static final c0 f4033i;

    /* renamed from: o  reason: collision with root package name */
    public static final d0 f4034o;

    /* renamed from: e  reason: collision with root package name */
    private final List f4035e;

    static {
        c0 c0Var = new c0();
        f4033i = c0Var;
        c0Var.m();
        f4034o = c0Var;
    }

    public c0() {
        this(10);
    }

    private static String d(Object obj) {
        if (obj instanceof String) {
            return (String) obj;
        }
        if (obj instanceof g) {
            return ((g) obj).u();
        }
        return y.j((byte[]) obj);
    }

    @Override // androidx.datastore.preferences.protobuf.d0
    public void I0(g gVar) {
        b();
        this.f4035e.add(gVar);
        ((AbstractList) this).modCount++;
    }

    @Override // androidx.datastore.preferences.protobuf.d0
    public Object O0(int i10) {
        return this.f4035e.get(i10);
    }

    @Override // androidx.datastore.preferences.protobuf.c, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean addAll(Collection collection) {
        return addAll(size(), collection);
    }

    @Override // java.util.AbstractList, java.util.List
    /* renamed from: c */
    public void add(int i10, String str) {
        b();
        this.f4035e.add(i10, str);
        ((AbstractList) this).modCount++;
    }

    @Override // androidx.datastore.preferences.protobuf.c, java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        b();
        this.f4035e.clear();
        ((AbstractList) this).modCount++;
    }

    @Override // java.util.AbstractList, java.util.List
    /* renamed from: e */
    public String get(int i10) {
        Object obj = this.f4035e.get(i10);
        if (obj instanceof String) {
            return (String) obj;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            String u10 = gVar.u();
            if (gVar.j()) {
                this.f4035e.set(i10, u10);
            }
            return u10;
        }
        byte[] bArr = (byte[]) obj;
        String j10 = y.j(bArr);
        if (y.g(bArr)) {
            this.f4035e.set(i10, j10);
        }
        return j10;
    }

    @Override // androidx.datastore.preferences.protobuf.c, java.util.AbstractList, java.util.Collection, java.util.List
    public /* bridge */ /* synthetic */ boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override // androidx.datastore.preferences.protobuf.y.b
    /* renamed from: f */
    public c0 z(int i10) {
        if (i10 >= size()) {
            ArrayList arrayList = new ArrayList(i10);
            arrayList.addAll(this.f4035e);
            return new c0(arrayList);
        }
        throw new IllegalArgumentException();
    }

    @Override // java.util.AbstractList, java.util.List
    /* renamed from: g */
    public String remove(int i10) {
        b();
        Object remove = this.f4035e.remove(i10);
        ((AbstractList) this).modCount++;
        return d(remove);
    }

    @Override // androidx.datastore.preferences.protobuf.d0
    public List getUnderlyingElements() {
        return Collections.unmodifiableList(this.f4035e);
    }

    @Override // androidx.datastore.preferences.protobuf.d0
    public d0 getUnmodifiableView() {
        if (y()) {
            return new n1(this);
        }
        return this;
    }

    @Override // java.util.AbstractList, java.util.List
    /* renamed from: h */
    public String set(int i10, String str) {
        b();
        return d(this.f4035e.set(i10, str));
    }

    @Override // androidx.datastore.preferences.protobuf.c, java.util.AbstractList, java.util.Collection, java.util.List
    public /* bridge */ /* synthetic */ int hashCode() {
        return super.hashCode();
    }

    @Override // androidx.datastore.preferences.protobuf.c, java.util.AbstractCollection, java.util.Collection, java.util.List
    public /* bridge */ /* synthetic */ boolean removeAll(Collection collection) {
        return super.removeAll(collection);
    }

    @Override // androidx.datastore.preferences.protobuf.c, java.util.AbstractCollection, java.util.Collection, java.util.List
    public /* bridge */ /* synthetic */ boolean retainAll(Collection collection) {
        return super.retainAll(collection);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f4035e.size();
    }

    @Override // androidx.datastore.preferences.protobuf.c, androidx.datastore.preferences.protobuf.y.b
    public /* bridge */ /* synthetic */ boolean y() {
        return super.y();
    }

    public c0(int i10) {
        this(new ArrayList(i10));
    }

    @Override // androidx.datastore.preferences.protobuf.c, java.util.AbstractList, java.util.List
    public boolean addAll(int i10, Collection collection) {
        b();
        if (collection instanceof d0) {
            collection = ((d0) collection).getUnderlyingElements();
        }
        boolean addAll = this.f4035e.addAll(i10, collection);
        ((AbstractList) this).modCount++;
        return addAll;
    }

    @Override // androidx.datastore.preferences.protobuf.c, java.util.AbstractCollection, java.util.Collection, java.util.List
    public /* bridge */ /* synthetic */ boolean remove(Object obj) {
        return super.remove(obj);
    }

    private c0(ArrayList arrayList) {
        this.f4035e = arrayList;
    }
}
