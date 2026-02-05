package tl;

import android.media.MediaFormat;
import com.linkedin.android.litr.io.MediaRange;
import rl.f;
import sl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected final rl.e f50787a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f50788b;

    /* renamed from: c  reason: collision with root package name */
    protected final i f50789c;

    /* renamed from: d  reason: collision with root package name */
    protected final ll.a f50790d;

    /* renamed from: e  reason: collision with root package name */
    protected final ll.b f50791e;

    /* renamed from: f  reason: collision with root package name */
    protected final MediaRange f50792f;

    /* renamed from: g  reason: collision with root package name */
    protected int f50793g;

    /* renamed from: h  reason: collision with root package name */
    protected int f50794h;

    /* renamed from: i  reason: collision with root package name */
    protected boolean f50795i;

    /* renamed from: j  reason: collision with root package name */
    protected MediaFormat f50796j;

    /* renamed from: k  reason: collision with root package name */
    protected long f50797k;

    /* renamed from: l  reason: collision with root package name */
    protected float f50798l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(rl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ll.a aVar, ll.b bVar) {
        this.f50797k = -1L;
        this.f50787a = eVar;
        this.f50793g = i10;
        this.f50794h = i11;
        this.f50788b = fVar;
        this.f50796j = mediaFormat;
        this.f50789c = iVar;
        this.f50790d = aVar;
        this.f50791e = bVar;
        MediaRange selection = eVar.getSelection();
        this.f50792f = selection;
        MediaFormat trackFormat = eVar.getTrackFormat(i10);
        if (trackFormat.containsKey("durationUs")) {
            long j10 = trackFormat.getLong("durationUs");
            this.f50797k = j10;
            if (mediaFormat != null) {
                mediaFormat.setLong("durationUs", j10);
            }
        }
        if (selection.a() >= selection.b()) {
            long min = Math.min(this.f50797k, selection.a());
            this.f50797k = min;
            this.f50797k = min - selection.b();
            return;
        }
        throw new IllegalArgumentException("Range end should be greater than range start");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public MediaFormat a(MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        if (!mediaFormat2.containsKey("durationUs") && mediaFormat.containsKey("durationUs")) {
            mediaFormat2.setLong("durationUs", mediaFormat.getLong("durationUs"));
        }
        if (!mediaFormat2.containsKey("language") && mediaFormat.containsKey("language")) {
            mediaFormat2.setString("language", mediaFormat.getString("language"));
        }
        return mediaFormat2;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int b() {
        while (this.f50787a.getSampleTrackIndex() == this.f50793g) {
            this.f50787a.advance();
            if ((this.f50787a.getSampleFlags() & 4) != 0) {
                return 4;
            }
        }
        return 5;
    }

    public String c() {
        return this.f50790d.getName();
    }

    public String d() {
        return this.f50791e.getName();
    }

    public float e() {
        return this.f50798l;
    }

    public MediaFormat f() {
        return this.f50796j;
    }

    public abstract int g();

    public abstract void h();

    public abstract void i();
}
