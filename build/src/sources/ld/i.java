package ld;

import com.google.android.exoplayer2.metadata.Metadata;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i implements Metadata.b {

    /* renamed from: d  reason: collision with root package name */
    public final String f37158d;

    public i(String str) {
        this.f37158d = str;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        return this.f37158d;
    }
}
