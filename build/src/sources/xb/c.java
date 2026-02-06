package xb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f54574a;

    private c(String str) {
        if (str != null) {
            this.f54574a = str;
            return;
        }
        throw new NullPointerException("name is null");
    }

    public static c b(String str) {
        return new c(str);
    }

    public String a() {
        return this.f54574a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        return this.f54574a.equals(((c) obj).f54574a);
    }

    public int hashCode() {
        return this.f54574a.hashCode() ^ 1000003;
    }

    public String toString() {
        return "Encoding{name=\"" + this.f54574a + "\"}";
    }
}
