package wl;

import android.media.MediaFormat;
import com.linkedin.android.litr.io.MediaRange;
import ul.f;
import vl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected final ul.e f53790a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f53791b;

    /* renamed from: c  reason: collision with root package name */
    protected final i f53792c;

    /* renamed from: d  reason: collision with root package name */
    protected final ol.a f53793d;

    /* renamed from: e  reason: collision with root package name */
    protected final ol.b f53794e;

    /* renamed from: f  reason: collision with root package name */
    protected final MediaRange f53795f;

    /* renamed from: g  reason: collision with root package name */
    protected int f53796g;

    /* renamed from: h  reason: collision with root package name */
    protected int f53797h;

    /* renamed from: i  reason: collision with root package name */
    protected boolean f53798i;

    /* renamed from: j  reason: collision with root package name */
    protected MediaFormat f53799j;

    /* renamed from: k  reason: collision with root package name */
    protected long f53800k;

    /* renamed from: l  reason: collision with root package name */
    protected float f53801l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(ul.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ol.a aVar, ol.b bVar) {
        this.f53800k = -1L;
        this.f53790a = eVar;
        this.f53796g = i10;
        this.f53797h = i11;
        this.f53791b = fVar;
        this.f53799j = mediaFormat;
        this.f53792c = iVar;
        this.f53793d = aVar;
        this.f53794e = bVar;
        MediaRange selection = eVar.getSelection();
        this.f53795f = selection;
        MediaFormat trackFormat = eVar.getTrackFormat(i10);
        if (trackFormat.containsKey("durationUs")) {
            long j10 = trackFormat.getLong("durationUs");
            this.f53800k = j10;
            if (mediaFormat != null) {
                mediaFormat.setLong("durationUs", j10);
            }
        }
        if (selection.a() >= selection.b()) {
            long min = Math.min(this.f53800k, selection.a());
            this.f53800k = min;
            this.f53800k = min - selection.b();
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
        while (this.f53790a.getSampleTrackIndex() == this.f53796g) {
            this.f53790a.advance();
            if ((this.f53790a.getSampleFlags() & 4) != 0) {
                return 4;
            }
        }
        return 5;
    }

    public String c() {
        return this.f53793d.getName();
    }

    public String d() {
        return this.f53794e.getName();
    }

    public float e() {
        return this.f53801l;
    }

    public MediaFormat f() {
        return this.f53799j;
    }

    public abstract int g();

    public abstract void h();

    public abstract void i();
}
