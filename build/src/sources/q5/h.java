package q5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f47430a;

    /* renamed from: b  reason: collision with root package name */
    public final float f47431b;

    /* renamed from: c  reason: collision with root package name */
    public final float f47432c;

    public h(String str, float f10, float f11) {
        this.f47430a = str;
        this.f47432c = f11;
        this.f47431b = f10;
    }

    public boolean a(String str) {
        if (this.f47430a.equalsIgnoreCase(str)) {
            return true;
        }
        if (this.f47430a.endsWith("\r")) {
            String str2 = this.f47430a;
            if (str2.substring(0, str2.length() - 1).equalsIgnoreCase(str)) {
                return true;
            }
        }
        return false;
    }
}
