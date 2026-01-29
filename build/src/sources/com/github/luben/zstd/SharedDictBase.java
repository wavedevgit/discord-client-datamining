package com.github.luben.zstd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class SharedDictBase extends AutoCloseBase {
    protected void finalize() {
        close();
    }
}
