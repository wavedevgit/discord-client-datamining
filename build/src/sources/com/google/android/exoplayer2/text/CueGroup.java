package com.google.android.exoplayer2.text;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.text.CueGroup;
import java.util.ArrayList;
import java.util.List;
import ji.s;
import ne.d;
import ne.w0;
import zd.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CueGroup implements g {

    /* renamed from: i  reason: collision with root package name */
    public static final CueGroup f13620i = new CueGroup(s.r(), 0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f13621o = w0.B0(0);

    /* renamed from: p  reason: collision with root package name */
    private static final String f13622p = w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    public static final g.a f13623q = new g.a() { // from class: zd.d
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            CueGroup b10;
            b10 = CueGroup.b(bundle);
            return b10;
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final s f13624d;

    /* renamed from: e  reason: collision with root package name */
    public final long f13625e;

    public CueGroup(List list, long j10) {
        this.f13624d = s.m(list);
        this.f13625e = j10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CueGroup b(Bundle bundle) {
        s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f13621o);
        if (parcelableArrayList == null) {
            d10 = s.r();
        } else {
            d10 = d.d(b.U, parcelableArrayList);
        }
        return new CueGroup(d10, bundle.getLong(f13622p));
    }
}
