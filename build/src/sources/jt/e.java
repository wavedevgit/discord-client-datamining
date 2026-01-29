package jt;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e implements p, Serializable {
    private final int hash;
    private final int identity;
    private final String name;

    /* JADX INFO: Access modifiers changed from: protected */
    public e(String str) {
        if (!str.trim().isEmpty()) {
            this.name = str;
            int hashCode = str.hashCode();
            this.hash = hashCode;
            if (E()) {
                if (hashCode == -1) {
                    hashCode = ~hashCode;
                }
            } else {
                hashCode = -1;
            }
            this.identity = hashCode;
            return;
        }
        throw new IllegalArgumentException("Element name is empty or contains only white space.");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public String B(x xVar) {
        if (D() && gt.f.class.isAssignableFrom(xVar.p())) {
            return "Accessing the local element [" + this.name + "] from a global type requires a timezone.\n- Try to apply a zonal query like \"" + this.name + ".atUTC()\".\n- Or try to first convert the global type to a zonal timestamp: \"moment.toZonalTimestamp(...)\".\n- If used in formatting then consider \"ChronoFormatter.withTimezone(TZID)\".";
        }
        return null;
    }

    public boolean D() {
        return true;
    }

    protected boolean E() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: b */
    public int compare(o oVar, o oVar2) {
        return ((Comparable) oVar.p(this)).compareTo(oVar2.p(this));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public z c(x xVar) {
        return null;
    }

    @Override // jt.p
    public char d() {
        return (char) 0;
    }

    @Override // java.util.Comparator
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            e eVar = (e) obj;
            int i10 = this.identity;
            if (i10 == eVar.identity && (i10 != -1 || (name().equals(eVar.name()) && m(eVar)))) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return this.hash;
    }

    @Override // jt.p
    public boolean i() {
        return false;
    }

    protected boolean m(e eVar) {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public p n() {
        return null;
    }

    @Override // jt.p
    public final String name() {
        return this.name;
    }

    public String toString() {
        String name = getClass().getName();
        StringBuilder sb2 = new StringBuilder(name.length() + 32);
        sb2.append(name);
        sb2.append('@');
        sb2.append(this.name);
        return sb2.toString();
    }
}
