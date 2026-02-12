package com.rivereactnative;

import app.rive.runtime.kotlin.core.ViewModelInstance;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ViewModelInstance f18482a;

    /* renamed from: b  reason: collision with root package name */
    private final String f18483b;

    /* renamed from: c  reason: collision with root package name */
    private final String f18484c;

    /* renamed from: d  reason: collision with root package name */
    private final Job f18485d;

    public b(ViewModelInstance instance, String path, String propertyType, Job job) {
        Intrinsics.checkNotNullParameter(instance, "instance");
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(propertyType, "propertyType");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f18482a = instance;
        this.f18483b = path;
        this.f18484c = propertyType;
        this.f18485d = job;
    }

    public final ViewModelInstance a() {
        return this.f18482a;
    }

    public final Job b() {
        return this.f18485d;
    }

    public final String c() {
        return this.f18483b;
    }

    public final String d() {
        return this.f18484c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return Intrinsics.areEqual(this.f18482a, bVar.f18482a) && Intrinsics.areEqual(this.f18483b, bVar.f18483b) && Intrinsics.areEqual(this.f18484c, bVar.f18484c) && Intrinsics.areEqual(this.f18485d, bVar.f18485d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f18482a.hashCode() * 31) + this.f18483b.hashCode()) * 31) + this.f18484c.hashCode()) * 31) + this.f18485d.hashCode();
    }

    public String toString() {
        ViewModelInstance viewModelInstance = this.f18482a;
        String str = this.f18483b;
        String str2 = this.f18484c;
        Job job = this.f18485d;
        return "PropertyListener(instance=" + viewModelInstance + ", path=" + str + ", propertyType=" + str2 + ", job=" + job + ")";
    }
}
