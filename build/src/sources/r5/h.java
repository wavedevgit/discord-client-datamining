package r5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f46731a;

    /* renamed from: b  reason: collision with root package name */
    public final float f46732b;

    /* renamed from: c  reason: collision with root package name */
    public final float f46733c;

    public h(String str, float f10, float f11) {
        this.f46731a = str;
        this.f46733c = f11;
        this.f46732b = f10;
    }

    public boolean a(String str) {
        if (this.f46731a.equalsIgnoreCase(str)) {
            return true;
        }
        if (this.f46731a.endsWith("\r")) {
            String str2 = this.f46731a;
            if (str2.substring(0, str2.length() - 1).equalsIgnoreCase(str)) {
                return true;
            }
        }
        return false;
    }
}
