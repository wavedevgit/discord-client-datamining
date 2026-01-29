package q5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f47009a;

    /* renamed from: b  reason: collision with root package name */
    public final float f47010b;

    /* renamed from: c  reason: collision with root package name */
    public final float f47011c;

    public h(String str, float f10, float f11) {
        this.f47009a = str;
        this.f47011c = f11;
        this.f47010b = f10;
    }

    public boolean a(String str) {
        if (this.f47009a.equalsIgnoreCase(str)) {
            return true;
        }
        if (this.f47009a.endsWith("\r")) {
            String str2 = this.f47009a;
            if (str2.substring(0, str2.length() - 1).equalsIgnoreCase(str)) {
                return true;
            }
        }
        return false;
    }
}
