package com.google.android.play.core.assetpacks;

import android.content.Context;
import androidx.work.Worker;
import androidx.work.WorkerParameters;
import androidx.work.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ExtractionWorker extends Worker {

    /* renamed from: q  reason: collision with root package name */
    u1 f15644q;

    public ExtractionWorker(Context context, WorkerParameters workerParameters) {
        super(context, workerParameters);
        x1.a(context).c(this);
    }

    @Override // androidx.work.Worker
    public final c.a p() {
        return this.f15644q.b(f());
    }

    @Override // androidx.work.Worker
    public final k4.g q() {
        return this.f15644q.a(f());
    }
}
