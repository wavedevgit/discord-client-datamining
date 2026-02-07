package gk;

import java.util.AbstractList;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w extends c implements x, RandomAccess {

    /* renamed from: i  reason: collision with root package name */
    private static final w f25426i;

    /* renamed from: o  reason: collision with root package name */
    public static final x f25427o;

    /* renamed from: e  reason: collision with root package name */
    private final List f25428e;

    static {
        w wVar = new w();
        f25426i = wVar;
        wVar.m();
        f25427o = wVar;
    }

    public w() {
        this(10);
    }

    private static String d(Object obj) {
        if (obj instanceof String) {
            return (String) obj;
        }
        if (obj instanceof f) {
            return ((f) obj).u();
        }
        return u.i((byte[]) obj);
    }

    @Override // gk.x
    public void L0(f fVar) {
        b();
        this.f25428e.add(fVar);
        ((AbstractList) this).modCount++;
    }

    @Override // gk.c, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean addAll(Collection collection) {
        return addAll(size(), collection);
    }

    @Override // java.util.AbstractList, java.util.List
    /* renamed from: c */
    public void add(int i10, String str) {
        b();
        this.f25428e.add(i10, str);
        ((AbstractList) this).modCount++;
    }

    @Override // gk.c, java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        b();
        this.f25428e.clear();
        ((AbstractList) this).modCount++;
    }

    @Override // java.util.AbstractList, java.util.List
    /* renamed from: e */
    public String get(int i10) {
        Object obj = this.f25428e.get(i10);
        if (obj instanceof String) {
            return (String) obj;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            String u10 = fVar.u();
            if (fVar.j()) {
                this.f25428e.set(i10, u10);
            }
            return u10;
        }
        byte[] bArr = (byte[]) obj;
        String i11 = u.i(bArr);
        if (u.g(bArr)) {
            this.f25428e.set(i10, i11);
        }
        return i11;
    }

    @Override // gk.c, java.util.AbstractList, java.util.Collection, java.util.List
    public /* bridge */ /* synthetic */ boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override // gk.u.b
    /* renamed from: f */
    public w z(int i10) {
        if (i10 >= size()) {
            ArrayList arrayList = new ArrayList(i10);
            arrayList.addAll(this.f25428e);
            return new w(arrayList);
        }
        throw new IllegalArgumentException();
    }

    @Override // gk.c, java.util.AbstractList, java.util.List
    /* renamed from: g */
    public String remove(int i10) {
        b();
        Object remove = this.f25428e.remove(i10);
        ((AbstractList) this).modCount++;
        return d(remove);
    }

    @Override // gk.x
    public List getUnderlyingElements() {
        return Collections.unmodifiableList(this.f25428e);
    }

    @Override // gk.x
    public x getUnmodifiableView() {
        if (y()) {
            return new g1(this);
        }
        return this;
    }

    @Override // java.util.AbstractList, java.util.List
    /* renamed from: h */
    public String set(int i10, String str) {
        b();
        return d(this.f25428e.set(i10, str));
    }

    @Override // gk.c, java.util.AbstractList, java.util.Collection, java.util.List
    public /* bridge */ /* synthetic */ int hashCode() {
        return super.hashCode();
    }

    @Override // gk.c, java.util.AbstractCollection, java.util.Collection, java.util.List
    public /* bridge */ /* synthetic */ boolean removeAll(Collection collection) {
        return super.removeAll(collection);
    }

    @Override // gk.c, java.util.AbstractCollection, java.util.Collection, java.util.List
    public /* bridge */ /* synthetic */ boolean retainAll(Collection collection) {
        return super.retainAll(collection);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f25428e.size();
    }

    @Override // gk.c, gk.u.b
    public /* bridge */ /* synthetic */ boolean y() {
        return super.y();
    }

    public w(int i10) {
        this(new ArrayList(i10));
    }

    @Override // gk.c, java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public /* bridge */ /* synthetic */ boolean add(Object obj) {
        return super.add(obj);
    }

    @Override // gk.c, java.util.AbstractList, java.util.List
    public boolean addAll(int i10, Collection collection) {
        b();
        if (collection instanceof x) {
            collection = ((x) collection).getUnderlyingElements();
        }
        boolean addAll = this.f25428e.addAll(i10, collection);
        ((AbstractList) this).modCount++;
        return addAll;
    }

    @Override // gk.c, java.util.AbstractCollection, java.util.Collection, java.util.List
    public /* bridge */ /* synthetic */ boolean remove(Object obj) {
        return super.remove(obj);
    }

    private w(ArrayList arrayList) {
        this.f25428e = arrayList;
    }
}
