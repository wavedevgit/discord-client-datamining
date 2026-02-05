package kl;

import android.media.MediaFormat;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private List f31921a = new ArrayList(2);

    public void a(MediaFormat mediaFormat) {
        a aVar = new a();
        aVar.e(mediaFormat);
        this.f31921a.add(aVar);
    }

    public List b() {
        return this.f31921a;
    }

    public void c(int i10, long j10) {
        a aVar = (a) this.f31921a.get(i10);
        aVar.c(aVar.a() + j10);
    }

    public void d(int i10, MediaFormat mediaFormat) {
        ((a) this.f31921a.get(i10)).f(mediaFormat);
    }

    public void e(int i10, String str, String str2) {
        a aVar = (a) this.f31921a.get(i10);
        aVar.b(str);
        aVar.d(str2);
    }
}
