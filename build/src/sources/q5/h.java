package q5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f46590a;

    /* renamed from: b  reason: collision with root package name */
    public final float f46591b;

    /* renamed from: c  reason: collision with root package name */
    public final float f46592c;

    public h(String str, float f10, float f11) {
        this.f46590a = str;
        this.f46592c = f11;
        this.f46591b = f10;
    }

    public boolean a(String str) {
        if (this.f46590a.equalsIgnoreCase(str)) {
            return true;
        }
        if (this.f46590a.endsWith("\r")) {
            String str2 = this.f46590a;
            if (str2.substring(0, str2.length() - 1).equalsIgnoreCase(str)) {
                return true;
            }
        }
        return false;
    }
}
