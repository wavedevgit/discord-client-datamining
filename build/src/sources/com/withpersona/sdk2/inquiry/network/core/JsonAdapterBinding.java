package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class JsonAdapterBinding<T> {
    @NotNull
    private final Class<T> clazz;
    @NotNull
    private final h jsonAdapter;

    public JsonAdapterBinding(@NotNull Class<T> cls, @NotNull h hVar) {
        this.clazz = cls;
        this.jsonAdapter = hVar;
    }

    @NotNull
    public final Class<T> getClazz() {
        return this.clazz;
    }

    @NotNull
    public final h getJsonAdapter() {
        return this.jsonAdapter;
    }
}
