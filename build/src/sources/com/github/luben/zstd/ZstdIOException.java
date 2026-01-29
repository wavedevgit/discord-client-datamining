package com.github.luben.zstd;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ZstdIOException extends IOException {
    private long code;

    public ZstdIOException(long j10) {
        this(Zstd.getErrorCode(j10), Zstd.getErrorName(j10));
    }

    public ZstdIOException(long j10, String str) {
        super(str);
        this.code = j10;
    }
}
