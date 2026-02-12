package yl;

import android.media.MediaFormat;
import com.linkedin.android.litr.io.MediaRange;
import wl.f;
import xl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected final wl.e f55613a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f55614b;

    /* renamed from: c  reason: collision with root package name */
    protected final i f55615c;

    /* renamed from: d  reason: collision with root package name */
    protected final ql.a f55616d;

    /* renamed from: e  reason: collision with root package name */
    protected final ql.b f55617e;

    /* renamed from: f  reason: collision with root package name */
    protected final MediaRange f55618f;

    /* renamed from: g  reason: collision with root package name */
    protected int f55619g;

    /* renamed from: h  reason: collision with root package name */
    protected int f55620h;

    /* renamed from: i  reason: collision with root package name */
    protected boolean f55621i;

    /* renamed from: j  reason: collision with root package name */
    protected MediaFormat f55622j;

    /* renamed from: k  reason: collision with root package name */
    protected long f55623k;

    /* renamed from: l  reason: collision with root package name */
    protected float f55624l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(wl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ql.a aVar, ql.b bVar) {
        this.f55623k = -1L;
        this.f55613a = eVar;
        this.f55619g = i10;
        this.f55620h = i11;
        this.f55614b = fVar;
        this.f55622j = mediaFormat;
        this.f55615c = iVar;
        this.f55616d = aVar;
        this.f55617e = bVar;
        MediaRange selection = eVar.getSelection();
        this.f55618f = selection;
        MediaFormat trackFormat = eVar.getTrackFormat(i10);
        if (trackFormat.containsKey("durationUs")) {
            long j10 = trackFormat.getLong("durationUs");
            this.f55623k = j10;
            if (mediaFormat != null) {
                mediaFormat.setLong("durationUs", j10);
            }
        }
        if (selection.a() >= selection.b()) {
            long min = Math.min(this.f55623k, selection.a());
            this.f55623k = min;
            this.f55623k = min - selection.b();
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
        while (this.f55613a.getSampleTrackIndex() == this.f55619g) {
            this.f55613a.advance();
            if ((this.f55613a.getSampleFlags() & 4) != 0) {
                return 4;
            }
        }
        return 5;
    }

    public String c() {
        return this.f55616d.getName();
    }

    public String d() {
        return this.f55617e.getName();
    }

    public float e() {
        return this.f55624l;
    }

    public MediaFormat f() {
        return this.f55622j;
    }

    public abstract int g();

    public abstract void h();

    public abstract void i();
}
