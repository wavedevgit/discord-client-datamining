package yb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f56057a;

    private c(String str) {
        if (str != null) {
            this.f56057a = str;
            return;
        }
        throw new NullPointerException("name is null");
    }

    public static c b(String str) {
        return new c(str);
    }

    public String a() {
        return this.f56057a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        return this.f56057a.equals(((c) obj).f56057a);
    }

    public int hashCode() {
        return this.f56057a.hashCode() ^ 1000003;
    }

    public String toString() {
        return "Encoding{name=\"" + this.f56057a + "\"}";
    }
}
