package xv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a {

    /* renamed from: b  reason: collision with root package name */
    private int f55168b = 0;

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f55167a = new StringBuilder();

    public void a(CharSequence charSequence) {
        if (this.f55168b != 0) {
            this.f55167a.append('\n');
        }
        this.f55167a.append(charSequence);
        this.f55168b++;
    }

    public String b() {
        return this.f55167a.toString();
    }
}
