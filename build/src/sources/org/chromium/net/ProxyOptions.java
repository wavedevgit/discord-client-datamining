package org.chromium.net;

import androidx.annotation.NonNull;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ProxyOptions {
    @NonNull
    private final List<Proxy> mProxyList;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public @interface Experimental {
    }

    public ProxyOptions(@NonNull List<Proxy> list) {
        Objects.requireNonNull(list);
        if (!list.isEmpty()) {
            this.mProxyList = new ArrayList(list);
            return;
        }
        throw new IllegalArgumentException("ProxyList cannot be empty");
    }

    @NonNull
    public List<Proxy> getProxyList() {
        return Collections.unmodifiableList(this.mProxyList);
    }
}
