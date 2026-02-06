package me;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f37065a = new b() { // from class: me.a
        @Override // me.b
        public final String a(com.google.android.exoplayer2.upstream.a aVar) {
            return b.b(aVar);
        }
    };

    static /* synthetic */ String b(com.google.android.exoplayer2.upstream.a aVar) {
        String str = aVar.f13273i;
        if (str != null) {
            return str;
        }
        return aVar.f13265a.toString();
    }

    String a(com.google.android.exoplayer2.upstream.a aVar);
}
