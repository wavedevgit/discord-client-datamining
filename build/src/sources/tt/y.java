package tt;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements h {

    /* renamed from: d  reason: collision with root package name */
    private final int f51152d;

    /* renamed from: e  reason: collision with root package name */
    private final rt.n f51153e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(rt.n nVar, int i10) {
        if (nVar != null) {
            if (i10 >= 1) {
                this.f51153e = nVar;
                this.f51152d = i10;
                return;
            }
            throw new IllegalArgumentException("Must be positive: " + i10);
        }
        throw new NullPointerException("Missing condition for unparseable chars.");
    }

    @Override // tt.h
    public void a(CharSequence charSequence, s sVar, rt.d dVar, t tVar, boolean z10) {
        int i10;
        int i11;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (this.f51153e == null) {
            i10 = length - this.f51152d;
        } else {
            int i12 = f10;
            for (int i13 = 0; i13 < this.f51152d && (i11 = i13 + f10) < length && this.f51153e.test(Character.valueOf(charSequence.charAt(i11))); i13++) {
                i12++;
            }
            i10 = i12;
        }
        int min = Math.min(Math.max(i10, 0), length);
        if (min > f10) {
            sVar.l(min);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f51152d == yVar.f51152d) {
                rt.n nVar = this.f51153e;
                rt.n nVar2 = yVar.f51153e;
                if (nVar != null ? nVar.equals(nVar2) : nVar2 == null) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // tt.h
    public int f(rt.o oVar, Appendable appendable, rt.d dVar, Set set, boolean z10) {
        return 0;
    }

    @Override // tt.h
    public boolean g() {
        return false;
    }

    @Override // tt.h
    public rt.p getElement() {
        return null;
    }

    public int hashCode() {
        rt.n nVar = this.f51153e;
        if (nVar == null) {
            return this.f51152d;
        }
        return nVar.hashCode() ^ (~this.f51152d);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(y.class.getName());
        if (this.f51153e == null) {
            sb2.append("[keepRemainingChars=");
            sb2.append(this.f51152d);
        } else {
            sb2.append("[condition=");
            sb2.append(this.f51153e);
            sb2.append(", maxIterations=");
            sb2.append(this.f51152d);
        }
        sb2.append(']');
        return sb2.toString();
    }

    @Override // tt.h
    public h d(rt.p pVar) {
        return this;
    }

    @Override // tt.h
    public h e(c cVar, rt.d dVar, int i10) {
        return this;
    }
}
