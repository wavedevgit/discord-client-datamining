package iu;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import iu.c0;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.FileSystemException;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.nio.file.attribute.BasicFileAttributes;
import java.nio.file.attribute.FileTime;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w extends r {
    private final Long v(FileTime fileTime) {
        Long valueOf = Long.valueOf(fileTime.toMillis());
        if (valueOf.longValue() != 0) {
            return valueOf;
        }
        return null;
    }

    @Override // iu.r, iu.h
    public void c(c0 source, c0 target) {
        StandardCopyOption standardCopyOption;
        StandardCopyOption standardCopyOption2;
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(target, "target");
        try {
            Path p10 = source.p();
            Path p11 = target.p();
            standardCopyOption = StandardCopyOption.ATOMIC_MOVE;
            standardCopyOption2 = StandardCopyOption.REPLACE_EXISTING;
            Files.move(p10, p11, standardCopyOption, standardCopyOption2);
        } catch (UnsupportedOperationException unused) {
            throw new IOException("atomic move not supported");
        } catch (NoSuchFileException e10) {
            throw new FileNotFoundException(e10.getMessage());
        }
    }

    @Override // iu.r, iu.h
    public g m(c0 path) {
        Intrinsics.checkNotNullParameter(path, "path");
        return u(path.p());
    }

    @Override // iu.r
    public String toString() {
        return "NioSystemFileSystem";
    }

    protected final g u(Path nioPath) {
        LinkOption linkOption;
        Path path;
        c0 c0Var;
        Long l10;
        Long l11;
        Intrinsics.checkNotNullParameter(nioPath, "nioPath");
        Long l12 = null;
        try {
            Class a10 = s.a();
            linkOption = LinkOption.NOFOLLOW_LINKS;
            BasicFileAttributes readAttributes = Files.readAttributes(nioPath, a10, linkOption);
            if (readAttributes.isSymbolicLink()) {
                path = Files.readSymbolicLink(nioPath);
            } else {
                path = null;
            }
            boolean isRegularFile = readAttributes.isRegularFile();
            boolean isDirectory = readAttributes.isDirectory();
            if (path != null) {
                c0Var = c0.a.f(c0.f31213e, path, false, 1, null);
            } else {
                c0Var = null;
            }
            Long valueOf = Long.valueOf(readAttributes.size());
            FileTime creationTime = readAttributes.creationTime();
            if (creationTime != null) {
                l10 = v(creationTime);
            } else {
                l10 = null;
            }
            FileTime lastModifiedTime = readAttributes.lastModifiedTime();
            if (lastModifiedTime != null) {
                l11 = v(lastModifiedTime);
            } else {
                l11 = null;
            }
            FileTime lastAccessTime = readAttributes.lastAccessTime();
            if (lastAccessTime != null) {
                l12 = v(lastAccessTime);
            }
            return new g(isRegularFile, isDirectory, c0Var, valueOf, l10, l11, l12, null, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null);
        } catch (NoSuchFileException | FileSystemException unused) {
            return null;
        }
    }
}
