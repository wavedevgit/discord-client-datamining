package r5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f47708a;

    /* renamed from: b  reason: collision with root package name */
    public final float f47709b;

    /* renamed from: c  reason: collision with root package name */
    public final float f47710c;

    public h(String str, float f10, float f11) {
        this.f47708a = str;
        this.f47710c = f11;
        this.f47709b = f10;
    }

    public boolean a(String str) {
        if (this.f47708a.equalsIgnoreCase(str)) {
            return true;
        }
        if (this.f47708a.endsWith("\r")) {
            String str2 = this.f47708a;
            if (str2.substring(0, str2.length() - 1).equalsIgnoreCase(str)) {
                return true;
            }
        }
        return false;
    }
}
