package com.rivereactnative;

import app.rive.runtime.kotlin.core.ViewModelInstance;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ViewModelInstance f18481a;

    /* renamed from: b  reason: collision with root package name */
    private final String f18482b;

    /* renamed from: c  reason: collision with root package name */
    private final String f18483c;

    /* renamed from: d  reason: collision with root package name */
    private final Job f18484d;

    public b(ViewModelInstance instance, String path, String propertyType, Job job) {
        Intrinsics.checkNotNullParameter(instance, "instance");
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(propertyType, "propertyType");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f18481a = instance;
        this.f18482b = path;
        this.f18483c = propertyType;
        this.f18484d = job;
    }

    public final ViewModelInstance a() {
        return this.f18481a;
    }

    public final Job b() {
        return this.f18484d;
    }

    public final String c() {
        return this.f18482b;
    }

    public final String d() {
        return this.f18483c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return Intrinsics.areEqual(this.f18481a, bVar.f18481a) && Intrinsics.areEqual(this.f18482b, bVar.f18482b) && Intrinsics.areEqual(this.f18483c, bVar.f18483c) && Intrinsics.areEqual(this.f18484d, bVar.f18484d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f18481a.hashCode() * 31) + this.f18482b.hashCode()) * 31) + this.f18483c.hashCode()) * 31) + this.f18484d.hashCode();
    }

    public String toString() {
        ViewModelInstance viewModelInstance = this.f18481a;
        String str = this.f18482b;
        String str2 = this.f18483c;
        Job job = this.f18484d;
        return "PropertyListener(instance=" + viewModelInstance + ", path=" + str + ", propertyType=" + str2 + ", job=" + job + ")";
    }
}
