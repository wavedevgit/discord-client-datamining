package av;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a {

    /* renamed from: b  reason: collision with root package name */
    private int f6956b = 0;

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f6955a = new StringBuilder();

    public void a(CharSequence charSequence) {
        if (this.f6956b != 0) {
            this.f6955a.append('\n');
        }
        this.f6955a.append(charSequence);
        this.f6956b++;
    }

    public String b() {
        return this.f6955a.toString();
    }
}
