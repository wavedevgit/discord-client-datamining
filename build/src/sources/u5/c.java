package u5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public enum c {
    JSON(".json"),
    ZIP(".zip"),
    GZIP(".gz");
    

    /* renamed from: d  reason: collision with root package name */
    public final String f51242d;

    c(String str) {
        this.f51242d = str;
    }

    public String d() {
        return ".temp" + this.f51242d;
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f51242d;
    }
}
