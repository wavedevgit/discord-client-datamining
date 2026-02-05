package com.rivereactnative;

import app.rive.runtime.kotlin.core.ViewModelInstance;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ViewModelInstance f17612a;

    /* renamed from: b  reason: collision with root package name */
    private final String f17613b;

    /* renamed from: c  reason: collision with root package name */
    private final String f17614c;

    /* renamed from: d  reason: collision with root package name */
    private final Job f17615d;

    public b(ViewModelInstance instance, String path, String propertyType, Job job) {
        Intrinsics.checkNotNullParameter(instance, "instance");
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(propertyType, "propertyType");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f17612a = instance;
        this.f17613b = path;
        this.f17614c = propertyType;
        this.f17615d = job;
    }

    public final ViewModelInstance a() {
        return this.f17612a;
    }

    public final Job b() {
        return this.f17615d;
    }

    public final String c() {
        return this.f17613b;
    }

    public final String d() {
        return this.f17614c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return Intrinsics.areEqual(this.f17612a, bVar.f17612a) && Intrinsics.areEqual(this.f17613b, bVar.f17613b) && Intrinsics.areEqual(this.f17614c, bVar.f17614c) && Intrinsics.areEqual(this.f17615d, bVar.f17615d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f17612a.hashCode() * 31) + this.f17613b.hashCode()) * 31) + this.f17614c.hashCode()) * 31) + this.f17615d.hashCode();
    }

    public String toString() {
        ViewModelInstance viewModelInstance = this.f17612a;
        String str = this.f17613b;
        String str2 = this.f17614c;
        Job job = this.f17615d;
        return "PropertyListener(instance=" + viewModelInstance + ", path=" + str + ", propertyType=" + str2 + ", job=" + job + ")";
    }
}
