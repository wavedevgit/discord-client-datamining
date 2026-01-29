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
    public static final CueGroup f13991i = new CueGroup(s.r(), 0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f13992o = w0.B0(0);

    /* renamed from: p  reason: collision with root package name */
    private static final String f13993p = w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    public static final g.a f13994q = new g.a() { // from class: zd.d
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            CueGroup b10;
            b10 = CueGroup.b(bundle);
            return b10;
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final s f13995d;

    /* renamed from: e  reason: collision with root package name */
    public final long f13996e;

    public CueGroup(List list, long j10) {
        this.f13995d = s.m(list);
        this.f13996e = j10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CueGroup b(Bundle bundle) {
        s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f13992o);
        if (parcelableArrayList == null) {
            d10 = s.r();
        } else {
            d10 = d.d(b.U, parcelableArrayList);
        }
        return new CueGroup(d10, bundle.getLong(f13993p));
    }
}
