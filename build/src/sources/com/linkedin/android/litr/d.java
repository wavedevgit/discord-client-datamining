package com.linkedin.android.litr;

import com.linkedin.android.litr.io.MediaRange;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final int f17211a;

    /* renamed from: b  reason: collision with root package name */
    public final List f17212b;

    /* renamed from: c  reason: collision with root package name */
    public final List f17213c;

    /* renamed from: d  reason: collision with root package name */
    public final MediaRange f17214d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f17215e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f17216f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private int f17217a = 100;

        /* renamed from: b  reason: collision with root package name */
        private List f17218b;

        /* renamed from: c  reason: collision with root package name */
        private List f17219c;

        /* renamed from: d  reason: collision with root package name */
        private MediaRange f17220d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f17221e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f17222f;

        public d a() {
            return new d(this.f17217a, this.f17218b, this.f17219c, this.f17220d, this.f17221e, this.f17222f);
        }

        public b b(int i10) {
            this.f17217a = i10;
            return this;
        }

        public b c(boolean z10) {
            this.f17222f = z10;
            return this;
        }
    }

    private d(int i10, List list, List list2, MediaRange mediaRange, boolean z10, boolean z11) {
        this.f17211a = i10;
        this.f17212b = list;
        this.f17213c = list2;
        this.f17214d = mediaRange == null ? new MediaRange(0L, LongCompanionObject.MAX_VALUE) : mediaRange;
        this.f17215e = z10;
        this.f17216f = z11;
    }
}
