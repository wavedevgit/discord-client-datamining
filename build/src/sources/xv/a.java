package xv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a {

    /* renamed from: b  reason: collision with root package name */
    private int f55736b = 0;

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f55735a = new StringBuilder();

    public void a(CharSequence charSequence) {
        if (this.f55736b != 0) {
            this.f55735a.append('\n');
        }
        this.f55735a.append(charSequence);
        this.f55736b++;
    }

    public String b() {
        return this.f55735a.toString();
    }
}
