package ji;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o0 extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final i0 f31905d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(i0 i0Var) {
        this.f31905d = (i0) ii.m.j(i0Var);
    }

    @Override // ji.i0, java.util.Comparator
    public int compare(Object obj, Object obj2) {
        return this.f31905d.compare(obj2, obj);
    }

    @Override // java.util.Comparator
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof o0) {
            return this.f31905d.equals(((o0) obj).f31905d);
        }
        return false;
    }

    @Override // ji.i0
    public i0 g() {
        return this.f31905d;
    }

    public int hashCode() {
        return -this.f31905d.hashCode();
    }

    public String toString() {
        String valueOf = String.valueOf(this.f31905d);
        StringBuilder sb2 = new StringBuilder(valueOf.length() + 10);
        sb2.append(valueOf);
        sb2.append(".reverse()");
        return sb2.toString();
    }
}
