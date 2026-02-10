package com.linkedin.android.litr;

import com.linkedin.android.litr.io.MediaRange;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final int f18100a;

    /* renamed from: b  reason: collision with root package name */
    public final List f18101b;

    /* renamed from: c  reason: collision with root package name */
    public final List f18102c;

    /* renamed from: d  reason: collision with root package name */
    public final MediaRange f18103d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f18104e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f18105f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private int f18106a = 100;

        /* renamed from: b  reason: collision with root package name */
        private List f18107b;

        /* renamed from: c  reason: collision with root package name */
        private List f18108c;

        /* renamed from: d  reason: collision with root package name */
        private MediaRange f18109d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f18110e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f18111f;

        public d a() {
            return new d(this.f18106a, this.f18107b, this.f18108c, this.f18109d, this.f18110e, this.f18111f);
        }

        public b b(int i10) {
            this.f18106a = i10;
            return this;
        }

        public b c(boolean z10) {
            this.f18111f = z10;
            return this;
        }
    }

    private d(int i10, List list, List list2, MediaRange mediaRange, boolean z10, boolean z11) {
        this.f18100a = i10;
        this.f18101b = list;
        this.f18102c = list2;
        this.f18103d = mediaRange == null ? new MediaRange(0L, LongCompanionObject.MAX_VALUE) : mediaRange;
        this.f18104e = z10;
        this.f18105f = z11;
    }
}
